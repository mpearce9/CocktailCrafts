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
                <component :is="curComps[selected]" @nameSearch="onNameSearch"/>
            </v-scroll-x-transition>
            <v-row justify="center">
                <v-col>
                    <v-data-table
                        :headers="apiHeaders"
                        :items="apiDrinkList"
                        class="elevation-1 mx-16"
                        @click:row="rowClicked"
                    >
                    <template v-slot:item.dName="{item}">
                        <tr>
                            <td>
                                <v-img max-height="128" max-width="160" contain :src="item.img" lazy-src="https://reactnative-examples.com/wp-content/uploads/2022/02/default-loading-image.png"/>
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
import { computed } from '@vue/runtime-core'
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
        }while(drinkArr[i]["strIngredient" + j] != null)
        finalDrinkArr.push({dName: drinkArr[i]["strDrink"],
                            category: drinkArr[i]["strCategory"], 
                            dIngredients: ingredients, 
                            id: drinkArr[i]["idDrink"],
                            img: drinkArr[i]["strDrinkThumb"],
                            instructions: drinkArr[i]["strInstructions"]})
    }
    return finalDrinkArr
}

async function getDrinkList(){
    return await axios.get('/api/populate')
            .then(response => preprocessApiDrinks(response.data.drinks))
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
            apiDrinkList: []
        }
    },
    async created() {
        this.apiDrinkList = await getDrinkList()
    },
    methods: {
        rowClicked(value, info){
            router.push({name: 'recipe', params: { id: value.id } })
        },
        async onNameSearch(search){
            await axios.get("/api/namesearch", {params: {name: search}})
            .then(response => this.apiDrinkList = preprocessApiDrinks(response.data.drinks))
        }
    }
}
</script>

<style scoped>
.v-list {
    background: none
}
</style>