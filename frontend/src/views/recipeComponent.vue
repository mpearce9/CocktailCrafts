<template>
    <v-app>
        <v-container grid-list-lg fluid fill-height>
            <v-row justify="center">
                <h1>{{sample_res[id].name}}</h1>
            </v-row>
            <v-row justify="center" class="mt-12">
                <v-col cols="4">
                    <v-card>
                        <v-card-title>Ingredients</v-card-title>
                        <v-list expand>
                            <v-list-group :value="false" prepend-icon="mdi-liquor">
                                <template v-slot:activator>
                                    <v-list-item-title>Liquors</v-list-item-title>
                                </template>
                                <v-list-item v-for="liq in sample_res[id].liquor" :key="liq">
                                    <v-list-item-content>
                                        <p>{{liq}}</p>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-group>
                            <v-list-group :value="false" prepend-icon="mdi-spoon-sugar">
                                <template v-slot:activator>
                                    <v-list-item-title>Mixers</v-list-item-title>
                                </template>
                                <v-list-item v-for="mix in sample_res[id].mixer" :key="mix" v-text="mix"/>
                            </v-list-group>
                            <v-list-group :value="false" prepend-icon="mdi-bottle-tonic-outline">
                                <template v-slot:activator>
                                    <v-list-item-title>Bitters</v-list-item-title>
                                </template>
                                <v-list-item v-for="bit in sample_res[id].bitters" :key="bit">
                                    {{bit}}
                                </v-list-item>
                            </v-list-group>
                            <v-list-group :value="false" prepend-icon="mdi-fruit-citrus">
                                <template v-slot:activator>
                                    <v-list-item-title>Garnishes</v-list-item-title>
                                </template>
                                <v-list-item v-for="gar in sample_res[id].garnish" :key="gar">
                                    {{gar}}
                                </v-list-item>
                            </v-list-group>
                        </v-list>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card>
                        <v-container>
                            <h1>Instructions</h1>
                            <p>{{sample_res[id].instructions}}</p>
                        </v-container>
                    </v-card>
                </v-col>
                <v-col cols="3">
                    <v-img :src="sample_res[id].img"/>
                </v-col>
            </v-row>
            <v-row justify="center" align="end">
                <v-btn @click="backToSearch">Back to Search</v-btn>
            </v-row>
        </v-container>
    </v-app>
</template>
<script>
import router from '../router/index'
export default {
    props:{
        id:Number
    },
    data() {
        return {
            sample_res: [{name: "Old Fashioned", liquor: ["Whiskey", "Rye"], mixer: ["Simple Syrup"], bitters: ["Angostura"], garnish: ["Lemon"], img: "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg", instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", id: 0},
                        {name: "Martini", liquor: ["Gin", "Vodka"], mixer: ["Vermouth"], bitters: ["None"], garnish: ["Olive"], img: "https://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg", instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", id:1},
                        {name: "Screwdriver", liquor: ["Vodka"], mixer: ["Orange Juice"], bitters: ["None"], garnish: ["None"], img: "https://www.thecocktaildb.com/images/media/drink/8xnyke1504352207.jpg", instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", id:2}],
        }
    },
    methods: {
        backToSearch(){
            router.push({name: 'search'})
        }
    }
}
</script>