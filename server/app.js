//require modules
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const main = require('./routes/main');
const { ppid } = require('process');
const mongoose = require ('mongoose');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');
var bodyParser = require('body-parser');

//create app 
const app = express();

//configure appm
let port = process.env.PORT || 3001;

//mount middleware
app.use(express.static('dist'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
app.use(
    session({
        secret: "cocktailcraftssecret",
        resave: false,
        saveUninitialized: false,
        // change to run locally
        store: new MongoStore({mongoUrl: 'mongodb+srv://3155cluster:3155cluster%2E123@3155cluster.nh76s.mongodb.net/cocktailcrafts'}),
        cookie: {maxAge: 60*60*1000}
        })
);

app.use((req, res, next) => {
    res.locals.user = req.session.user||null;
    res.locals.name = req.session.name||null;
    res.locals.email = req.session.email||null;
    next();
});

//set up routes

//require('./routes')(app)

//Import route files for coursedetails and index
var routes = require('./routes/main.js');
const { resourceLimits } = require('worker_threads');
app.use(cors());
app.use('/api/', routes);

app.get('/*', (req, res)=> {
    res.sendFile(path.join('dist', 'index.html'))
})


app.use((req, res, next)=> {
    let err = new Error('The server cannot locate ' + req.url);
    err.status = 404;
    next(err);
});

app.use((err, req, res, next)=>{
    if(!err.status) {
        err.status = 500;
        err.message = ("Internal server error");
    }
    console.log("error", err);
    res.status(err.status).json({error: err});
});

//start the server
app.listen(port, ()=>{
    console.log('Server is running on port', port);
})