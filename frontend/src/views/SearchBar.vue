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
                <component :is="curComps[selected]" :option_searches="option_searches"/>
            </v-scroll-x-reverse-transition>
            <v-scroll-x-transition v-else mode="in" :hide-on-leave="true">
                <component :is="curComps[selected]" :option_searches="option_searches"/>
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
            option_searches: [{"name" : "Liquor", "options" : ["Whiskey", "Gin", "Vodka", "Rum"]}, 
                              {"name" : "Mixer", "options" : ["Orange Juice", "Cranberry Juice", "Simple Syrup", "Vermouth"]},
                              {"name" : "Bitters", "options" : ["Angostura", "Orange", "Peychauds", "Cinnamon"]},
                              {"name" : "Garnish", "options" : ["Orange", "Lime", "Cherry", "Olive"]}],
            sample_res_headers: [{text: "Drink Name", align: "start", value: "name"},
                                 {text: "Liquor", value: "liquor"},
                                 {text: "Mixer", value: "mixer"},
                                 {text: "Bitters", value: "bitters"},
                                 {text: "Garnish", value: "garnish"}],
            sample_res: [{name: "Old Fashioned", liquor: ["Whiskey", "Rye"], mixer: ["Simple Syrup"], bitters: ["Angostura"], garnish: ["Orange"], instructions: "Add the sugar and bitters to a rocks glass, then add the water, and stir until the sugar is nearly dissolved. Fill the glass with large ice cubes, add the bourbon, and gently stir to combine. Express the oil of an orange peel over the glass, then drop in.", id: 0},
                        {name: "Martini", liquor: ["Gin", "Vodka"], mixer: ["Vermouth"], bitters: ["None"], garnish: ["Olive"], instructions: "Combine vodka and dry vermouth in a cocktail mixing glass. Fill with ice and stir until chilled. Strain into a chilled martini glass. Garnish with three olives on a toothpick.", id:1},
                        {name: "Screwdriver", liquor: ["Vodka"], mixer: ["Orange Juice"], bitters: ["None"], garnish: ["Orange"], instructions: "Divide ice between 4 glasses. Add vodka and orange juice to a pitcher and stir. Pour over ice. Alternatively, instead of using a pitcher, divide the vodka and orange juice between 4 glasses — Each glass should have 2 ounces of vodka and about 3 ounces of orange juice. Stir well then place a few orange wedges into the middle of the glass.", id:2}],
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
    }
}
</script>

<style scoped>
.v-list {
    background: none
}
</style>