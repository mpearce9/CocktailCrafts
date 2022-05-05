<template>
<!-- the option that pulls up when the user selects to ingredients search -->
    <v-container grid-list-lg fill-width fluid>
        <v-row justify="center" class="pt-3 mx-16" align="start">
                <v-col cols="10">
                    <v-autocomplete :items="ingredient_options" label="Ingredients" v-model="curIngredient" multiple chips small-chips clearable deletable-chips dense outlined :menu-props="{offsetY: true}"/>
                </v-col>
                <v-col cols="2">
                    <v-btn color="secondary" @click="onSearch" dark block>Search</v-btn>
                </v-col>
            </v-row>
    </v-container>
</template>

<script>
export default {
    props: {
        ingredient_options: Array,
        curSearch: Array
    },
    data(){
        return {
            //contains all the options for the ingredients
            option_searches: [{"name" : "Liquor", "options" : ["Whiskey", "Gin", "Vodka", "Rum"]}, 
                              {"name" : "Mixer", "options" : ["Orange Juice", "Cranberry Juice", "Simple Syrup", "Vermouth"]},
                              {"name" : "Bitters", "options" : ["Angostura", "Orange", "Peychauds", "Cinnamon"]},
                              {"name" : "Garnish", "options" : ["Orange", "Lime", "Cherry", "Olive"]}],
            curIngredient: [],
        }
    },
    created() {
        this.curIngredient = this.curSearch
    },
    methods: {
        onSearch(){
            this.$emit('ingredientSearch', this.curIngredient)
        }
    }
}
</script>