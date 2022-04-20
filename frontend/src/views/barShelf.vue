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
              <v-tab>Search by Ingredients</v-tab>
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
                        :headers="sample_res_headers"
                        :items="sample_res"
                        class="elevation-1 mx-16"
                        @click:row="rowClicked"
                    >
                    <template v-slot:item.liquor="{item}">
                        <v-list>
                            <v-list-item v-for="l in item.liquor" :key="l">{{l}}</v-list-item>
                        </v-list>
                    </template>
                    <template v-slot:item.mixer="{item}">
                        <v-list>
                            <v-list-item v-for="m in item.mixer" :key="m">{{m}}</v-list-item>
                        </v-list>
                    </template>
                    <template v-slot:item.bitters="{item}">
                        <v-list>
                            <v-list-item v-for="b in item.bitters" :key="b">{{b}}</v-list-item>
                        </v-list>
                    </template>
                    <template v-slot:item.garnish="{item}">
                        <v-list>
                            <v-list-item v-for="g in item.garnish" :key="g">{{g}}</v-list-item>
                        </v-list>
                       </template>
                    </v-data-table>
                </v-col>
          </div>
          <div>
          <v-btn color = "info" href = "/add">ADD INGREDIENTS</v-btn>
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
            curComps: [IngredientSearch],
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