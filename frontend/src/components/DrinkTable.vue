<template>
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
                <v-icon dark id = "favicon" @click="favorite(item)">
                    {{item.favorited ? "mdi-heart" : "mdi-heart-outline"}}
                </v-icon>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
const axios = require('axios')
export default {
    props:{
        apiDrinkList: Array,
        tableLoading: Boolean
    },
    data() {
        return {
            apiHeaders: [{text: "", align: "start", value: "img", sortable: false},
                        {text: "Drink Name", value: "dName"},
                        {text: "Category", value: "category"},
                        {text: "Ingredients", value: "dIngredients"},
                        {text: "Favorite", valued: "favorited"}],
            useremail: '',

            
        }
    },
    async created(){
        await axios.get("/api/logininfo")
        .then(response => {
            console.log(response.data);
            if(response.data.email){
                return  this.useremail = response.data.email;
            }
            else
                return this.useremail = "UnknownUser"
        })
        let promises = []
        let favorites = []
        console.log(this.apiDrinkList);
        for(let i = 0; i < this.apiDrinkList.length; i++){
            promises.push(axios.get("/api/isfavorite/" + this.apiDrinkList[i].id)
            .then(response => {
                console.log(response.data);
                if(response.data.length > 0){
                    favorites.push(true)
                }
                else
                    favorites.push(false)
            }))
        }
        await Promise.all(promises).then( result => {
            console.log(favorites);
            for(let i = 0; i < this.apiDrinkList.length; i++){
                this.apiDrinkList[i].favorited = favorites[i]
            }
        })
    },
    methods: {
        rowClicked(value, info){
            this.$emit('row-clicked', value)
        },
        favorite(curDrink){
            curDrink.favorited = !curDrink.favorited
            console.log(curDrink);
            console.log(this.useremail);
            if(curDrink.favorited){
                axios.post("/api/favorite",{
                name: curDrink.dName, ingredients: curDrink.dIngredients, category: curDrink.category, cocktailid: curDrink.id, img: curDrink.img, instructions: curDrink.instructions, useremail: useremail
                })
                .then(response =>{
                    console.log(response);
                })
                .catch(err => console.log(err));
            }
            else{
                axios.post("/api/unfavorite",{
                    name: curDrink.dName, ingredients: curDrink.dIngredients, category: curDrink.category, cocktailid: curDrink.id, img: curDrink.img, instructions: curDrink.instructions, useremail: useremail
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