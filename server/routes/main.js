const express = require('express');
const controller = require('../controller/mainController');
const router = express.Router();
const usercontroller = require('../controller/user.controller');

// these routes are for the api routes from our app url, based on the url, routes to the controllers and gets their specific functions
// contains api functions and user functions

router.get('/populate', controller.getStart)
router.get('/idsearch', controller.idDrinkSearch)
router.get('/namesearch', controller.nameDrinkSearch)
router.get('/getIngredients', controller.getIngredients)
router.get('/ingredientSearch', controller.ingredientDrinkSearch)
router.get('/getpopular', controller.getPopular)

router.post('/login', usercontroller.login)

router.post('/signup', usercontroller.signup)

router.get('/logininfo', usercontroller.getlogininfo)

router.post('/logout', usercontroller.logout)

router.post('/favorite', usercontroller.favorite)

router.post('/unfavorite', usercontroller.unfavorite)

router.get('/listfavorites', usercontroller.listfavorites)

router.get('/isfavorite/:id', usercontroller.isfavorite)

module.exports = router;