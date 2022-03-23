<template>
    <v-app>
        <v-container grid-list-lg>
            <v-row justify="center">
                <h1>{{sample_res[id].name}}</h1>
            </v-row>
            <v-row justify="center">
                <v-col cols="2">
                    <v-list expand>
                        <v-header>Ingredients</v-header>
                        <v-list-group :value="false">
                            <template v-slot:activator>
                                <v-list-item-title>Liquors</v-list-item-title>
                            </template>
                            <v-list-item v-for="liq in sample_res[id].liquor" :key="liq">
                                {{liq}}
                            </v-list-item>
                        </v-list-group>
                        <v-list-group :value="false">
                            <template v-slot:activator>
                                <v-list-item-title>Mixers</v-list-item-title>
                            </template>
                            <v-list-item v-for="mix in sample_res[id].mixer" :key="mix">
                                {{mix}}
                            </v-list-item>
                        </v-list-group>
                        <v-list-group :value="false">
                            <template v-slot:activator>
                                <v-list-item-title>Bitters</v-list-item-title>
                            </template>
                            <v-list-item v-for="bit in sample_res[id].bitters" :key="bit">
                                {{bit}}
                            </v-list-item>
                        </v-list-group>
                        <v-list-group :value="false">
                            <template v-slot:activator>
                                <v-list-item-title>Garnishes</v-list-item-title>
                            </template>
                            <v-list-item v-for="gar in sample_res[id].garnish" :key="gar">
                                {{gar}}
                            </v-list-item>
                        </v-list-group>
                    </v-list>
                </v-col>
            </v-row>
        </v-container>
        
    </v-app>
</template>
<script>
export default {
    props:{
        id:Number
    },
    data() {
        return {
            sample_res: [{name: "Old Fashioned", liquor: ["Whiskey", "Rye"], mixer: ["Simple Syrup"], bitters: ["Angostura"], garnish: ["Lemon"], id: 0},
                        {name: "Martini", liquor: ["Gin"], mixer: ["Vermouth"], bitters: ["None"], garnish: ["Olive"], id:1},
                        {name: "Screwdriver", liquor: ["Vodka"], mixer: ["Orange Juice"], bitters: ["None"], garnish: ["None"], id:2}],
        }
    }
}
</script>