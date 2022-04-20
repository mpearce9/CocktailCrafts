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
            <v-row>
                <h1 style = "font-size:2.0em; color:blue;">Your Bar Shelf</h1>
                <hr style = "size:20; color: blue;">
            </v-row>
            <v-row justify="center">
              <v-tab>Add Ingredients</v-tab>
            </v-row>
            <v-scroll-x-reverse-transition v-if="selected == 0" mode="in" :hide-on-leave="true">
                <component :is="curComps[selected]" :option_add="option_add"/>
            </v-scroll-x-reverse-transition>
            <v-scroll-x-transition v-else mode="in" :hide-on-leave="true">
                <component :is="curComps[selected]" :option_add="option_add"/>
            </v-scroll-x-transition>
            <v-row justify="center">
          </div>
        </v-card>
    </v-row>
    </v-container>
    </v-app>
</template>

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