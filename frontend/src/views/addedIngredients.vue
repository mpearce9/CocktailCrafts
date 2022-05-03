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
            <v-row justify="center">

            </v-row>
        </div>
    </v-row>
    </v-container>
    </v-app>
</template>

<script>
import axios from 'axios'
  export default {      
      async created() {
          await axios.get("/api/listAddedIngredients")
        .then(response => {
            if(response.data.addedIngredients){
                return this.addedIngredients = response.data.addedIngredients;
            }
            else
                localStorage.setItem('user', 'unknown');
                return this.user = "none added"
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