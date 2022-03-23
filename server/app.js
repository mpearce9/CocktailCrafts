//require modules
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const main = require('./routes/main');
const { ppid } = require('process');



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

app.use('/public', express.static('public'));

//set up routes

//require('./routes')(app)

//Import route files for coursedetails and index
var routes = require('./routes/main');

//app.use('/', routes);

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