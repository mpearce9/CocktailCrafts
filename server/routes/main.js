const express = require('express');
const controller = require('../controller/mainController');
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile('../dist/index.html')
});

router.get('/home', function (req, res) {
    res.render('home');
});

router.get('/about', function (req, res) {
    res.render('aboutUs');
});

router.get('/contact', function (req, res) {
    res.render('contactUs');
});


// error handler
router.use(function(err, req, res, next) {
  console.log('error handling');
  res.status(err.status || 500);
  res.render('error',{error:err,message:err.message,url:req.url});
});
module.exports = router;