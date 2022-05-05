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
                            instructions: drinkArr[i]["strInstructions"]})
    }
    return finalDrinkArr
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
                        {text: "Ingredients", value: "dIngredients"}],
            apiDrinkList: [],
            ingredientsList: [],
            tableLoading: true
        }
    },
    async created() {
        await axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/popular.php')
            .then(response => {
                    this.apiDrinkList = preprocessApiDrinks(response.data.drinks)
                    this.tableLoading = false
                })
        await axios.get("https://www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list")
            .then(response => {
                this.ingredientsList = preprocessIngredientsList(response.data.drinks)
            })
    },
    methods: {
        rowClicked(value, info){
            router.push({name: 'popularrecipe', params: { id: value.id } })
        }
    }
}
</script>

<style scoped>
.v-list {
    background: none
}
</style>