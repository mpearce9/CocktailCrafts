const express = require('express');
const controller = require('../controller/mainController');
const router = express.Router();
const usercontroller = require('../controller/user.controller');

router.get('/populate', controller.getStart)

router.post('/login', usercontroller.login)

router.post('/signup', usercontroller.signup)

/*
// error handler
router.use(function(err, req, res, next) {
  console.log('error handling');
  res.status(err.status || 500);
  res.render('error',{error:err,message:err.message,url:req.url});
});
*/
module.exports = router;