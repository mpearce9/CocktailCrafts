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
                    <component :is="curComps[2]" :apiDrinkList="apiDrinkList" :tableLoading="tableLoading" @row-clicked="rowClicked"/>
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

async function getFullDetails(drinkArr){
    let fullDetailArr = []
    let promises = []
    for(let i = 0; i < drinkArr.length; i++){
        promises.push(axios.get('/api/idsearch', {params: {id: drinkArr[i]["idDrink"]}}, {timeout: 500})
            .then(response => {
                if(response.data != "")
                    fullDetailArr.push(preprocessApiDrinks(response.data.drinks)[0])
            }))
    }
    await Promise.all(promises).then(() => {
        console.log(fullDetailArr)})
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
            curComps: [NameSearch, IngredientSearch, DrinkTable],
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
        if(localStorage.getItem('drink-list')){
            this.apiDrinkList = JSON.parse(localStorage.getItem('drink-list'))
            this.tableLoading = false
        } else {
            let fullResponse = ""
            await axios.get('/api/populate')
                .then(response => {
                    fullResponse = response.data.drinks        
                })
            let finalList = await getFullDetails(fullResponse)
            this.apiDrinkList = finalList//preprocessApiDrinks(response.data.drinks)
            localStorage.setItem('drink-list', JSON.stringify(this.apiDrinkList))
            this.tableLoading = false   
        }
        if(localStorage.getItem('ingredient-list')){
            this.ingredientsList = JSON.parse(localStorage.getItem('ingredient-list'))
        } else {
            await axios.get('/api/getIngredients')
                .then(response => {
                    this.ingredientsList = preprocessIngredientsList(response.data.drinks)
                    localStorage.setItem('ingredient-list', JSON.stringify(this.ingredientsList))
                })
        }
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
            
            let fullResponse = ""
            await axios.get("/api/ingredientSearch", {params: {ingredients: searchString}})
            .then(response => {
                fullResponse = response.data.drinks
            })
            if(typeof(fullResponse) == "object" && fullResponse)
                this.apiDrinkList = await getFullDetails(fullResponse)
            else
                this.apiDrinkList = []
            this.tableLoading = false
        }
    }
}
</script>
<style scoped>
.v-list{
    background: none !important;
}
</style>