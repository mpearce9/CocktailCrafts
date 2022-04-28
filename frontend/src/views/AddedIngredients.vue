<template>
  <v-container style="background-color:black">
    <v-row class="text-center">

        <h2 style="color:white">
          Added Ingredients
        </h2>

    </v-row>
  </v-container>
</template>
diff --git a/frontend/src/router/index.js b/frontend/src/router/index.js

<script>
import addIngredients from '../components/addIngredients.vue'
import router from '../router/index'
export default  {
    
    components: {
        addIngredients
    },
    data() {
        return {
            option_add: [{"name" : "Liquor", "options" : ["Whiskey", "Gin", "Vodka", "Rum"]}, 
                              {"name" : "Mixer", "options" : ["Orange Juice", "Cranberry Juice", "Simple Syrup", "Vermouth"]},
                              {"name" : "Bitters", "options" : ["Angostura", "Orange", "Peychauds", "Cinnamon"]},
                              {"name" : "Garnish", "options" : ["Orange", "Lime", "Cherry", "Olive"]}],
            curComps: [addIngredients],
            selected: 0
        }
        
    },
    methods: {
        rowClicked(value, info){
            router.push({name: 'recipe', params: { id: value.id } })
        }
    }
}
</script>

<style scoped>
.v-list {
    background: none
}
</style>
