<template>
    <v-app>
        <v-container grid-list-lg fill-width style="background-color: var(--v-primary-base)" fluid>
            <v-spacer></v-spacer>
            <v-row justify="center">
                <v-col v-for="option in option_searches" :key="option.name" cols="auto" class="v-col">
                    <p> {{option.name}}</p>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            option_searches: [{"name" : "Liquor", "options" : ["Whiskey", "Gin", "Vodka", "Rum"]}, 
                              {"name" : "Mixer", "options" : ["Orange Juice", "Cranberry Juice", "Simple Syrup", "Lime Juice"]},
                              {"name" : "Bitters", "options" : ["Angostura", "Orange", "Peychauds", "Cinnamon"]},
                              {"name" : "Garnish", "options" : ["Lemon", "Lime", "Cherry"]}]
        }
    }
}
</script>

<style scoped>
.v-col {
    background-color: var(--v-primary-base);
}
</style>