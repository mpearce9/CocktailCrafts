//require modules
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const main = require('./routes/main');
const { ppid } = require('process');
const mongoose = require ('mongoose');
const cors = require('cors');
var bodyParser = require('body-parser');

//create app 
const app = express();

//configure appm
let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');

//mount middleware
app.use(express.static('public'));
app.use(express.static('dist'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/public', express.static('public'));

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

//set up routes

//require('./routes')(app)

//Import route files for coursedetails and index
var routes = require('./routes/main.js');
app.use(cors());
app.use('/api/', routes);

app.get('/*', (req, res)=> {
    res.sendFile(__dirname + '/dist/index.html')
})

app.listen(3000);


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
    res.status(err.status);
    res.render('error', {error: err});
});

//start the server
app.listen(port, host, ()=>{
    console.log('Server is running on port', port);
})