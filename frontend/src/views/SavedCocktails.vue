<template>
    <v-app>
        <v-container grid-list-lg fill-width fluid>
            <v-row justify="center">
                <h1>{{user}} Saved Cocktails</h1>
            </v-row>
            <v-row justify="center">
                <v-col>
                    <v-data-table
                        :headers="apiHeaders"
                        :items="apiDrinkList"
                        class="elevation-1 mx-16"
                        @click:row="rowClicked"
                        no-data-text="No Saved Drinks"
                        :loading="tableLoading"
                        loading-text="Loading Saved Drinks..."
                    >
                    <template v-slot:item.dName="{item}">
                        <tr>
                            <td>
                                <v-img max-height="128" max-width="128" class="mr-6 rounded-circle" contain :src="item.img" lazy-src="https://reactnative-examples.com/wp-content/uploads/2022/02/default-loading-image.png"/>
                            </td>
                            <td class="ml-4">{{item.dName}}</td>
                        </tr>
                    </template>
                    <template v-slot:item.dIngredients="{item}">
                        <v-list>
                            <v-list-item v-for="i in item.dIngredients" :key="i">{{i}}</v-list-item>
                        </v-list>
                    </template>
                    </v-data-table>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import axios from 'axios'
import router from '../router/index'

function processSavedRecipes(drinkArr){
    let finalDrinkArr = []
    for(let i = 0; i < drinkArr.length; i++){
        let j = 1
        do {
            j++
        }while(drinkArr[i]["strIngredient" + j] != null && drinkArr[i]["strIngredient" + j] != "")
        finalDrinkArr.push({dName: drinkArr[i]["name"],
                            category: drinkArr[i]["category"], 
                            dIngredients: drinkArr[i]["ingredients"],
                            id: drinkArr[i]["cocktailid"],
                            img: drinkArr[i]["img"],
                            instructions: drinkArr[i]["instructions"]})
    }
    return finalDrinkArr
}

export default  {
    async created() {
        await axios.get("/api/logininfo")
        .then(response => {
            if(response.data.email){
                console.log(response.data);
                this.user = response.data.name + "'s";
                return  this.useremail = response.data.email;
            }
            else
                this.user = ""
                return this.useremail = "unknown"
        })

        await axios.get("/api/listfavorites")
        .then(response => {
            if(response.data){
                console.log(response.data);
                this.apiDrinkList = processSavedRecipes(response.data);
                console.log(this.apiDrinkList);
                this.tableloading = false;
            }
            else{
                console.log("fail");
            }
        })
    },
    data() {
        return {  
            apiHeaders: [{text: "Drink Name", align: "start", value: "dName"},
                        {text: "Category", value: "category"},
                        {text: "Ingredients", value: "dIngredients"}],
            useremail: '',
            user: '',
            apiDrinkList:[],
            ingredientsList: [],
            tableloading: true,
        }
    },
    methods: {
        rowClicked(value, info){
            router.push({name: 'recipe', params: { id: value.id } })
        },
    }
}
</script>

<style scoped>
.v-list {
    background: none
}
</style>