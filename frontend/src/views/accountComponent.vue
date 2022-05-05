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
              <!-- this page appears once the user logs in, contains link to various pages specific to the user -->
            <v-row>
                <h1 style = "font-size:2.0em;" id = "welcome">Welcome, {{ user }} </h1>
            </v-row>
            <v-row>
                <h1>&zwnj;</h1>
            </v-row>
            <v-row justify="center">
                <v-col cols="6">
                    <v-btn block color = "info" to = "/savedCocktails">Your Saved Cocktails</v-btn>
                </v-col>
                <v-col cols="6">
                    <v-btn block color = "info" to = "/accountDetails">Account Details</v-btn>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="6">
<<<<<<< HEAD
                    <v-btn block color = "info" href = "/barShelf">BarShelf</v-btn>
=======
                    <v-btn block color = "info" to = "/recommendations">Recommendations</v-btn>
>>>>>>> 4867fcfe9855869b54a2eb2df697ea4acbd98969
                </v-col>
                <v-col cols="6">
                    <v-btn block color = "info" to = "/random">Random</v-btn>
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
          //this api call gets the user's name who is logged in so it can welcome the user by name
          await axios.get("/api/logininfo")
        .then(response => {
            if(response.data.name){
                return  this.user = response.data.name;
            }
            else
                localStorage.setItem('user', 'unknown');
                return this.user = "Unknown User"
            })
      }
  }
</script>