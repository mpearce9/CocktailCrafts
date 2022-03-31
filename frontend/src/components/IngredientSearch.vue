<template>
    <v-container grid-list-lg fill-width fluid>
        <v-row justify="center" class="pt-3 mx-16" align="start">
                <v-col v-for="option in option_searches" :key="option.name" cols="2.5">
                    <v-select :items="option.options" :label="option.name" dense outlined multiple chips deletable-chips :menu-props="{offsetY: true}"/>
                </v-col>
                <v-col cols="2">
                    <v-btn color="secondary" dark block>Search</v-btn>
                </v-col>
            </v-row>
    </v-container>
</template>

<script>
export default {
    data(){
        return {
            option_searches: [{"name" : "Liquor", "options" : ["Whiskey", "Gin", "Vodka", "Rum"]}, 
                              {"name" : "Mixer", "options" : ["Orange Juice", "Cranberry Juice", "Simple Syrup", "Vermouth"]},
                              {"name" : "Bitters", "options" : ["Angostura", "Orange", "Peychauds", "Cinnamon"]},
                              {"name" : "Garnish", "options" : ["Orange", "Lime", "Cherry", "Olive"]}],
        }
    }
}
</script>