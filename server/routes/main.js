const express = require('express');
const controller = require('../controller/mainController');
const router = express.Router();
const usercontroller = require('../controller/user.controller');
const ingredientsController = require('../controller/ingredientsController');

// these routes are for the api routes from our app url, based on the url, routes to the controllers and gets their specific functions
// contains api functions and user functions

router.get('/populate', controller.getStart)
router.get('/idsearch', controller.idDrinkSearch)
router.get('/namesearch', controller.nameDrinkSearch)
router.get('/getIngredients', controller.getIngredients)
router.get('/ingredientSearch', controller.ingredientDrinkSearch)

router.post('/login', usercontroller.login)

router.post('/signup', usercontroller.signup)

router.get('/logininfo', usercontroller.getlogininfo)

router.post('/logout', usercontroller.logout)

router.post('/favorite', usercontroller.favorite)

router.post('/unfavorite', usercontroller.unfavorite)

router.get('/listfavorites', usercontroller.listfavorites)

router.get('/isfavorite/:id', usercontroller.isfavorite)

<<<<<<< HEAD
router.post('/addIngredients', ingredientsController.addIngredients)

router.post('/listAddedIngredients', ingredientsController.listAddedIngredients)
/*
// error handler
router.use(function(err, req, res, next) {
  console.log('error handling');
  res.status(err.status || 500);
  res.render('error',{error:err,message:err.message,url:req.url});
});
*/
=======
>>>>>>> 4867fcfe9855869b54a2eb2df697ea4acbd98969
module.exports = router;