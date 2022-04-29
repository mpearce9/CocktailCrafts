<template>
    <v-app>
    <v-container>
    <v-row
      class="mb-8"
    >
        <v-card
        color = "rgb(15,12,12)"
        id = "barShelf"
        width = "100%"
        justify-center
        >
          <div>
            <v-row justify="center">
                <h1>Your Bar Shelf</h1>
            </v-row>
            <IngredientSearch  :searchButton="false" :ingredient_options="ingredientsList" @ingredientAdd="onIngredientAdd"/>
            <v-row justify="center">
                <v-col>
                    <v-data-table
                        :headers="ingredientHeaders"
                        :items="ownedIngredients"
                        class="elevation-1 mx-16"
                        show-select
                        item-key="ingredient"
                        v-model="selected"
                        no-data-text="Your Bar Shelf is Empty"
                    >
                    </v-data-table>
                </v-col>
          </div>
        </v-card>
    </v-row>
    </v-container>
    </v-app>
</template>

<script>
import IngredientSearch from '../components/IngredientSearch.vue'
import router from '../router/index'
export default  {
    
    components: {
        IngredientSearch
    },
    data() {
        return {
            ingredientHeaders: [{text: "Ingredient", value: "ingredient"}],
            ingredientsList: [],
            ownedIngredients: [],
            selected: []
        }
        
    },
    async created(){
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
        onIngredientAdd(ingredients){
            ingredients.forEach(element => {
                this.ownedIngredients.push({ingredient: element, selected: false})
            });
        }
    }
}
</script>

<style scoped>
.v-list {
    background: none
}
</style>

