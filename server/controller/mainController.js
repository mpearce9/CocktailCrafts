const axios = require('axios')

//filters by alcoholic drinks
exports.getStart = (req, res)=>{
    axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Alcoholic')
    .then(function (response) {
        res.json(response.data);
    })
    .catch(function(error) {
        console.log(error);
    })
};

// gets ingreedients from the api
exports.getIngredients = (req, res) => {
    axios.get("https://www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list")
    .then(function (response) {
        res.json(response.data);
    })
    .catch(function(error) {
        console.log(error);
    })
}

//does a search by drink id in the api
exports.idDrinkSearch = (req, res)=>{
    axios.get("https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=" + req.query.id)
    .then(function (response) {
        res.json(response.data);
    })
    .catch(function(error) {
        console.log(error);
        res.json("")
    })
}

// does a search by name in the API
exports.nameDrinkSearch = (req, res)=> {
    axios.get("https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=" + req.query.name)
    .then(function (response) {
        res.json(response.data);
    })
    .catch(function(error) {
        console.log(error);
    })
}

// does a search by ingredients in the api
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
exports.getPopular = (req, res) => {
    axios.get("https://www.thecocktaildb.com/api/json/v2/9973533/popular.php")
    .then(function (response) {
        res.json(response.data)
    })
    .catch(error => {
        console.log(error);
    })
}