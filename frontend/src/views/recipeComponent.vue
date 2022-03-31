<template>
    <v-app>
        <v-container grid-list-lg fluid fill-height>
            <v-row justify="center">
                <h1>{{curDrink.dName}}</h1>
            </v-row>
            <v-row justify="center" class="mt-12">
                <v-col cols="4">
                    <v-card>
                        <v-card-title>Ingredients</v-card-title>
                        <v-list expand>
                            <v-list-item v-for="i in curDrink.dIngredients" :key="i">{{i}}</v-list-item>
                        </v-list>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card>
                        <v-container>
                            <h1>Instructions</h1>
                            <p>{{curDrink.instructions}}</p>
                        </v-container>
                    </v-card>
                </v-col>
                <v-col cols="3">
                    <v-img :src="curDrink.img"/>
                </v-col>
            </v-row>
            <v-row justify="center" align="end">
                <v-btn @click="backToSearch">Back to Search</v-btn>
            </v-row>
        </v-container>
    </v-app>
</template>
<script>
import router from '../router/index'
const axios = require('axios')

function preprocessDrink(drink){
    let ingredients = []
    let j = 1
    do {
        let ingredientString = ""
        if (drink["strMeasure" + j] != null){
            ingredientString = drink["strMeasure" + j] + " " + drink["strIngredient" + j]
        } else {
            ingredientString = drink["strIngredient" + j]
        }
        ingredients.push(ingredientString)
        j++
    }while(drink["strIngredient" + j] != null)
    return {dName: drink["strDrink"],
                        category: drink["strCategory"], 
                        dIngredients: ingredients, 
                        id: drink["idDrink"],
                        img: drink["strDrinkThumb"],
                        instructions: drink["strInstructions"]}
}

export default {
    props:{
        id : String
    },
    data() {
        return {
            curDrink: {dName: "",
                        category: "", 
                        dIngredients: [], 
                        id: "",
                        img: "",
                        instructions: ""}
        }
    },
    async created(){
        await axios.get("/api/search", {params: {id: this.id}})
        .then(response => this.curDrink = preprocessDrink(response.data.drinks[0]))
    },
    methods: {
        backToSearch(){
            router.push({name: 'search'})
        }
    }
}
</script>