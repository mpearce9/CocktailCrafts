const axios = require('axios')

exports.getStart = (req, res)=>{
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    .then(function (response) {
        res.json(response.data);
    })
    .catch(function(error) {
        console.log(error);
    })
};

exports.idDrinkSearch = (req, res)=>{
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + req.query.id)
    .then(function (response) {
        res.json(response.data);
    })
    .catch(function(error) {
        console.log(error);
    })
}

exports.nameDrinkSearch = (req, res)=> {
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + req.query.name)
    .then(function (response) {
        res.json(response.data);
    })
    .catch(function(error) {
        console.log(error);
    })
}