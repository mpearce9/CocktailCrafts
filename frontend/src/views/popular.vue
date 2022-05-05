<template>
    <v-app>
        <v-container grid-list-lg fill-width fluid>
            <v-row justify="center">
                <h1>Try Some Popular Cocktails!</h1>
            </v-row>
            <v-row justify="center">
                <v-col>
                    <v-data-table
                        :headers="apiHeaders"
                        :items="apiDrinkList"
                        class="elevation-1 mx-16"
                        :loading="tableLoading"
                        loading-text="Loading Drinks..."
                        @click:row="rowClicked"
                        no-data-text="No Drinks Found That Match Selected Criteria"
                    >
                    <template v-slot:item.dName="{item}">
                        <tr>
                            <td>
                                <v-img max-height="128" max-width="128" class="mr-6 rounded-circle" contain :src="item.img" lazy-src="https://reactnative-examples.com/wp-content/uploads/2022/02/default-loading-image.png"/>
                            </td>
                            <td class="ml-4">{{item.dName}}</td>
                        </tr>
                    </template>
                    <template v-slot:item.dIngredients="{item}">
                        <v-list>
                            <v-list-item v-for="i in item.dIngredients" :key="i">{{i}}</v-list-item>
                        </v-list>
                    </template>
                    <template v-slot:item.favorited="{item}">
                        <v-progress-circular v-if="favLoading" indeterminate dark/>
                        <v-simple-checkbox v-else dark off-icon="mdi-heart-outline" on-icon="mdi-heart" v-model="item.favorited" @click="favorite(item)"/>
                    </template>
                    </v-data-table>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import IngredientSearch from '../components/IngredientSearch.vue'
import NameSearch from '../components/NameSearch.vue'
import router from '../router/index'
const axios = require('axios')

function preprocessApiDrinks(drinkArr){
    let finalDrinkArr = []
    for(let i = 0; i < drinkArr.length; i++){
        let ingredients = []
        let j = 1
        do {
            let ingredientString = ""
            if (drinkArr[i]["strMeasure" + j] != null){
                ingredientString = drinkArr[i]["strMeasure" + j] + " " + drinkArr[i]["strIngredient" + j]
            } else {
                ingredientString = drinkArr[i]["strIngredient" + j]
            }
            ingredients.push(ingredientString)
            j++
        }while(drinkArr[i]["strIngredient" + j] != null && drinkArr[i]["strIngredient" + j] != "")
        finalDrinkArr.push({dName: drinkArr[i]["strDrink"],
                            category: drinkArr[i]["strCategory"], 
                            dIngredients: ingredients, 
                            id: drinkArr[i]["idDrink"],
                            img: drinkArr[i]["strDrinkThumb"],
                            instructions: drinkArr[i]["strInstructions"],
                            favorited: false})
    }
    return finalDrinkArr
}

async function getFavorites(apiDrinkList){
    console.log(apiDrinkList);
    axios.get('/api/listfavorites')
        .then(response => {
            let savedDrinks = response.data
            savedDrinks.forEach(element => {
                apiDrinkList.forEach(drink => {
                    if(drink.id == element["cocktailid"]){
                        drink.favorited = true
                    }
                })
            })
        })
    return apiDrinkList
}

function getFullDetails(drinkArr){
    let fullDetailArr = []
    for(let i = 0; i < drinkArr.length; i++){
        axios.get('/api/idsearch', {params: {id: drinkArr[i]["idDrink"]}})
            .then(response => {
                console.log(response.data.drinks);
                fullDetailArr.push(preprocessApiDrinks(response.data.drinks)[0])
            })
    }
    return fullDetailArr
}

function preprocessIngredientsList(ingArr){
    let finalIngArr = []
    for(let i = 0; i<ingArr.length; i++){
        finalIngArr.push(ingArr[i]["strIngredient1"])
    }
    return finalIngArr.sort()
}

export default  {
    
    components: {
        IngredientSearch,
        NameSearch
    },

    data() {
        return {  
            curComps: [NameSearch, IngredientSearch],
            selected: 0,
            apiHeaders: [{text: "Drink Name", align: "start", value: "dName"},
                        {text: "Category", value: "category"},
                        {text: "Ingredients", value: "dIngredients"},
                        {text: "Favorite", value: "favorited"}],
            apiDrinkList: [],
            tableLoading: true,
            favLoading: true,
            useremail: ""
        }
    },
    async created() {
        await axios.get("/api/logininfo")
        .then(response => {
            console.log(response.data);
            if(response.data.email){
                return  this.useremail = response.data.email;
            }
            else
                return this.useremail = "UnknownUser"
        })
        await axios.get('/api/getpopular')
            .then(response => {
                    this.apiDrinkList = preprocessApiDrinks(response.data.drinks)
                    this.tableLoading = false
                })
        this.apiDrinkList = await getFavorites(this.apiDrinkList)
        this.favLoading = false
    },
    methods: {
        rowClicked(value, info){
            router.push({name: 'popularrecipe', params: { id: value.id } })
        },
        favorite(curDrink){
            console.log(curDrink);
            console.log(this.useremail);
            if(curDrink.favorited){
                axios.post("/api/favorite",{
                name: curDrink.dName, ingredients: curDrink.dIngredients, category: curDrink.category, cocktailid: curDrink.id, img: curDrink.img, instructions: curDrink.instructions, useremail: this.useremail
                })
                .then(response =>{
                    console.log(response);
                })
                .catch(err => console.log(err));
            }
            else{
                axios.post("/api/unfavorite",{
                    name: curDrink.dName, ingredients: curDrink.dIngredients, category: curDrink.category, cocktailid: curDrink.id, img: curDrink.img, instructions: curDrink.instructions, useremail: this.useremail
                })
                .then(response =>{
                    console.log(response);
                })
                .catch(err => console.log(err));
            }
        }
    }
}
</script>

<style scoped>
.v-list {
    background: none
}
</style>