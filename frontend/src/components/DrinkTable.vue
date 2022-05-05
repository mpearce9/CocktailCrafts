<template>
<!-- this is the table component that is used for the search page, passes all of the necessary values and props -->
    <v-container>
        <v-data-table
            :headers="apiHeaders"
            :items="apiDrinkList"
            class="elevation-1 mx-16"
            :loading="tableLoading"
            :items-per-page="10"
            loading-text="Loading Drinks..."
            @click:row="rowClicked"
            no-data-text="No Drinks Found That Match Selected Criteria"
        >
            <template v-slot:item.img="{item}">
                <v-img max-height="128" max-width="128" class="rounded-circle" contain :src="item.img" lazy-src="https://reactnative-examples.com/wp-content/uploads/2022/02/default-loading-image.png"/>
            </template>
            <template v-slot:item.dIngredients="{item}">
                <v-list>
                    <v-list-item v-for="i in item.dIngredients" :key="i">{{i}}</v-list-item>
                </v-list>
            </template>
            <template v-slot:item.favorited="{item}">
                <v-progress-circular v-if="favLoading" indeterminate dark/>
                <v-simple-checkbox v-else dark off-icon="mdi-heart-outline" on-icon="mdi-heart" v-model="item.favorited" @click="favorite(item)"/>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
const axios = require('axios')
export default {
    props:{
        apiDrinkList: Array,
        tableLoading: Boolean,
        favLoading: Boolean
    },
    data() {
        //contains the headers for the tables and the values for each column
        return {
            apiHeaders: [{text: "", align: "start", value: "img", sortable: false},
                        {text: "Drink Name", value: "dName"},
                        {text: "Category", value: "category"},
                        {text: "Ingredients", value: "dIngredients"},
                        {text: "Favorite", value: "favorited"}],
            useremail: '',

            
        }
    },
    async created(){
        await axios.get("/api/logininfo")
        .then(response => {
            console.log(response.data);
            if(response.data.email){
                this.useremail = response.data.email;
            }
            else
                this.useremail = "UnknownUser"
        })
        console.log(this.apiDrinkList);
    },
    methods: {
        rowClicked(value, info){
            this.$emit('row-clicked', value)
        },
        favorite(curDrink){
            console.log(curDrink);
            console.log(this.useremail);
            if(curDrink.favorited){
                axios.post("/api/favorite",{
                name: curDrink.dName, ingredients: curDrink.dIngredients, category: curDrink.category, cocktailid: curDrink.id, img: curDrink.img, instructions: curDrink.instructions, useremail: this.useremail
                })
                .then(response =>{
                    console.log(response);
                })
                .catch(err => console.log(err));
            }
            else{
                axios.post("/api/unfavorite",{
                    name: curDrink.dName, ingredients: curDrink.dIngredients, category: curDrink.category, cocktailid: curDrink.id, img: curDrink.img, instructions: curDrink.instructions, useremail: this.useremail
                })
                .then(response =>{
                    console.log(response);
                })
                .catch(err => console.log(err));
            }
        }
    }
}
</script>
<style scoped>
.v-list{
    background: none !important;
}
</style>