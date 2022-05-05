<template>
    <v-app>
    <v-container>
    <v-row
      class="mb-8"
    >
          <div>
            <v-row>
                <h1 style = "font-size:2.0em;" id = "welcome">Welcome, {{ user }} </h1>
            </v-row>
            <v-row justify="center">
                <h3 style = "font-size:1.5em;">Added Ingredients...</h1>
            </v-row>
            <template v-slot:item.dIngredients="{item}">
                        <v-list>
                            <v-list-item v-for="i in item.dIngredients" :key="i">{{i}}</v-list-item>
                        </v-list>
            </template>
            <v-row justify="center">

            </v-row>
        </div>
    </v-row>
    </v-container>
    </v-app>
</template>

<script>
import axios from 'axios'

function processAddedIngredients(IngredientsArr){
    let addedIngredientsArr = []
    for(let i = 0; i < ingredientsArr.length; i++){
        let j = 1
        do {
            j++
        }while(ingredientsArr[i]["strIngredient" + j] != null && ingredientsArr[i]["strIngredient" + j] != "")
        addedIngredientsArr.push({
                            dIngredients: ingredientsArr[i]["addedIngredients"],
                            })
    }
    return addedIngredientsArr
}

  export default {   
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

        await axios.get("/api/listAddedIngredients")
        .then(response => {
            if(response.data){
                this.addedIngredients = processAddedIngredients(response.data);
            }
            else {
               console.log("fail");
            }
        })
    },

    data(){
        return{
            addedIngredients: [],
        }    
    }
  }
</script>

<style scoped>
.v-list {
    background: none
}
</style>