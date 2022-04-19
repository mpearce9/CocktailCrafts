<template>
    <v-app>
        <v-container grid-list-lg fill-width fluid>
            <v-row justify="center">
                <h1>Search</h1>
            </v-row>
            <v-row justify="center">
                <v-col>
                    <v-tabs centered v-model="selected">
                        <v-tab>Search by Drink Name</v-tab>
                        <v-tab>Search by Ingredients</v-tab>
                    </v-tabs>
                </v-col>
            </v-row>
            <v-scroll-x-reverse-transition v-if="selected == 0" mode="in" :hide-on-leave="true">
                <component :is="curComps[selected]" @nameSearch="onNameSearch"/>
            </v-scroll-x-reverse-transition>
            <v-scroll-x-transition v-else mode="in" :hide-on-leave="true">
                <component :is="curComps[selected]" :ingredient_options="ingredientsList" @ingredientSearch="onIngredientSearch"/>
            </v-scroll-x-transition>
            <v-row justify="center">
                <v-col>
                    <DrinkTable :apiDrinkList="apiDrinkList" :tableLoading="tableLoading" @row-clicked="rowClicked"/>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import IngredientSearch from '../components/IngredientSearch.vue'
import NameSearch from '../components/NameSearch.vue'
import DrinkTable from '../components/DrinkTable.vue'
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
        NameSearch,
        DrinkTable
    },

    data() {
        return {  
            curComps: [NameSearch, IngredientSearch],
            selected: 0,
            apiHeaders: [{text: "", align: "start", value: "img", sortable: false},
                        {text: "Drink Name", value: "dName"},
                        {text: "Category", value: "category"},
                        {text: "Ingredients", value: "dIngredients"}],
            apiDrinkList: [],
            ingredientsList: [],
            tableLoading: true
        }
    },
    async created() {
        await axios.get('/api/populate')
            .then(response => {
                    this.apiDrinkList = preprocessApiDrinks(response.data.drinks)
                    this.tableLoading = false
                })
        await axios.get('/api/getIngredients')
            .then(response => {
                this.ingredientsList = preprocessIngredientsList(response.data.drinks)
            })
    },
    methods: {
        rowClicked(value){
            router.push({name: 'recipe', params: { id: value.id } })
        },
        async onNameSearch(search){
            this.tableLoading = true
            await axios.get("/api/namesearch", {params: {name: search}})
            .then(response => {
                if(response.data.drinks)
                    this.apiDrinkList = preprocessApiDrinks(response.data.drinks)
                else
                    this.apiDrinkList = []
                this.tableLoading = false
            })
        },
        async onIngredientSearch(search){
            this.tableLoading = true

            let searchString = ""
            for(let i = 0; i<search.length; i++){
                if(i != search.length - 1){
                    searchString += search[i] + ","
                } else {
                    searchString += search[i]
                }
            }
            
            await axios.get("/api/ingredientSearch", {params: {ingredients: searchString}})
            .then(response => {
                if(typeof(response.data.drinks) == "object" && response.data.drinks)
                    this.apiDrinkList = getFullDetails(response.data.drinks)
                else
                    this.apiDrinkList = []
                this.tableLoading = false
            })
        }
    }
}
</script>
<style scoped>
.v-list{
    background: none !important;
}
</style>