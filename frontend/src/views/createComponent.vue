<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1>
          Create a Cocktail
        </h1>

        <form>
            <v-text-field
                v-model="CocktailName"
                label="Cocktail name"
                required
            >
            </v-text-field>
            <component :is="curComps[selected]" :ingredient_options="ingredientsList" @ingredientSearch="onIngredientSearch" :search_feature="false"/>
            <v-text-field 
                v-model="CocktailInstructions"
                label="Please explain how to make this drink."
            />
            {{ /* Picture upload with validator of size */ }}
        </form>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import IngredientSearch from '../components/IngredientSearch.vue'
import router from '../router/index'
const axios = require('axios')

function preprocessIngredientsList(ingArr){
    let finalIngArr = []
    for(let i = 0; i<ingArr.length; i++){
        finalIngArr.push(ingArr[i]["strIngredient1"])
    }
    return finalIngArr.sort()
}
export default  {
    
    components: {
        IngredientSearch
    },

    data() {
        return {  
            curComps: [IngredientSearch],
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