<template>
    <v-app>
    <v-container>
    <v-row
      class="mb-8"
    >
        <v-card
        color = "rgb(15,12,12)"
        id = "homecard"
        width = "100%"
        justify-center
        >
          <div>
            <v-row>
                <h1 style = "font-size:2.0em;" id = "welcome">Welcome, {{ user }} </h1>
            </v-row>
            <v-row>
                <h1>&zwnj;</h1>
            </v-row>
            <v-row justify="center">
                <v-col cols="6">
                    <v-btn block color = "info" href = "/savedCocktails">Your Saved Cocktails</v-btn>
                </v-col>
                <v-col cols="6">
                    <v-btn block color = "info" href = "/accountDetails">Account Details</v-btn>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="6">
                    <v-btn block color = "info" href = "/recommendations">Recommendations</v-btn>
                </v-col>
                <v-col cols="6">
                    <v-btn block color = "info" href = "/random">Random</v-btn>
                </v-col>
            </v-row>
        </div>
        </v-card>
    </v-row>
    </v-container>
    </v-app>
</template>



<script>
import axios from 'axios'
  export default {
    data(){
        return{
            user: '',
      }
      },
      async created() {
          await axios.get("/api/logininfo")
        .then(response => {
            if(response.data.name){
                console.log(response.data);
                return  this.user = response.data.name;
            }
            else
                return this.user = "Unknown User"
            })
      }
  }
</script>