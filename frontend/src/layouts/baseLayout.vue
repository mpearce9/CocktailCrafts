<template>
<!-- this is the base layout for the app, this includes the navigation, the dynamic header, and the footer as well, all pages will contain this -->
<v-app>
  <v-card class="overflow-hidden" color = "rgb(15,12,12)">
    <v-app-bar
      fixed
      color = "rgb(15,12,12)"
      dark
    >
      <v-toolbar-title style="cursor: pointer" @click="$router.push('/')">cocktail crafts</v-toolbar-title>
      <v-container style="height: 100%; width: 50%">
        <v-text-field v-if="!isSearchPage" prepend-inner-icon="mdi-magnify" label="Search for a Drink" style="align: center" @keydown.enter="$router.push({name: 'search', params: {headerSearch: drinkSearch}})" v-model="drinkSearch" dark outlined dense clearable/>
      </v-container>
      <!-- this component is a dynamic header based on if the user is logged in or not -->
      <component v-bind:is= "component"></component>
    </v-app-bar>
      <v-container style="height: 100px;">
      </v-container>
  </v-card>

  <v-main color ="rgb(15, 12, 12)">
    <router-view/>
  </v-main>

  <v-divider color = "white"></v-divider>
  <v-footer
    dark
    padless
    color = "rgb(15,12,12)"
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="rgb(15, 12, 12) py-4 text-center white--text"
        cols="12"
      >
      <v-btn plain to="/aboutus">
        ABOUT US
      </v-btn>
      <v-btn plain to = "/contact">
        CONTACT
      </v-btn>
      <v-btn plain disabled>
        Copyright 2022
      </v-btn>
      </v-col>
    </v-row>
  </v-footer>

  </v-app>
</template>

<script>
import loggedin from '../components/AppBarLoggedIn.vue'
import regular from '../components/AppBarRegular.vue'
const axios = require('axios')

export default {
  components:{
    'logged-in':loggedin,
    'regular': regular
    },
    data() {
        return {
          component:'',
          drinkSearch: ""
        }
    },
    computed: {
      isSearchPage(){
        return this.$route.name == "search"
      }
    },
    //makes an api call to discover if the user is logged in or not, based on the response will show a different navigation bar component
    async created(){
        await axios.get("/api/logininfo")
        .then(response => {
            console.log(response.data);
            if(response.data.email){
                localStorage.setItem('user', 'known');
                return  this.component = 'logged-in';
            }
            else
                localStorage.setItem('user', 'unknown');
                return this.component = 'regular';
        })
    },
    methods: {
    }
}
</script>