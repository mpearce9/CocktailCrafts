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
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import IngredientSearch from '../components/IngredientSearch.vue'
import NameSearch from '../components/NameSearch.vue'
import router from '../router/index'
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
                              {"name" : "Garnish", "options" : ["Lemon", "Lime", "Cherry", "Olive"]}],
            sample_res_headers: [{text: "Drink Name", align: "start", value: "name"},
                                 {text: "Liquor", value: "liquor"},
                                 {text: "Mixer", value: "mixer"},
                                 {text: "Bitters", value: "bitters"},
                                 {text: "Garnish", value: "garnish"}],
            sample_res: [{name: "Old Fashioned", liquor: ["Whiskey", "Rye"], mixer: ["Simple Syrup"], bitters: ["Angostura"], garnish: ["Lemon"], instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", id: 0},
                        {name: "Martini", liquor: ["Gin", "Vodka"], mixer: ["Vermouth"], bitters: ["None"], garnish: ["Olive"], instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", id:1},
                        {name: "Screwdriver", liquor: ["Vodka"], mixer: ["Orange Juice"], bitters: ["None"], garnish: ["None"], instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", id:2}],
            curComps: [NameSearch, IngredientSearch],
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