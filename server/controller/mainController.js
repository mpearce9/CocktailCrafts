const axios = require('axios')

exports.getStart = (req, res)=>{
    axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/latest.php')
    .then(function (response) {
        res.json(response.data);
    })
    .catch(function(error) {
        console.log(error);
    })
};

exports.getIngredients = (req, res) => {
    axios.get("https://www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list")
    .then(function (response) {
        res.json(response.data);
    })
    .catch(function(error) {
        console.log(error);
    })
}

exports.idDrinkSearch = (req, res)=>{
    axios.get("https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=" + req.query.id)
    .then(function (response) {
        res.json(response.data);
    })
    .catch(function(error) {
        console.log(error);
    })
}

exports.nameDrinkSearch = (req, res)=> {
    axios.get("https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=" + req.query.name)
    .then(function (response) {
        res.json(response.data);
    })
    .catch(function(error) {
        console.log(error);
    })
}

exports.ingredientDrinkSearch = (req, res) => {
    console.log(req.query.ingredients);
    axios.get("https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=" + req.query.ingredients)
    .then(function (response) {
        res.json(response.data);
    })
    .catch(function(error) {
        console.log(error);
    })
}