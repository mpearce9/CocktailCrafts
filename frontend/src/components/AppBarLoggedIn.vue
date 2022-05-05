<template>
<!-- this is the navigation component returned if the user is logged in, contains navigation to search, logout, and account functions -->
<div>
      <v-btn plain to="/">
        HOME
      </v-btn>
      <v-btn plain to = "/discover">
        DISCOVER
      </v-btn>
      <v-btn plain to = "/search">
        SEARCH
      </v-btn>
      <v-btn plain to = "/account">
        ACCOUNT
      </v-btn>
      <v-btn plain @click="logOut">
        LOGOUT
      </v-btn>
      </div>
</template>

<style scoped>
div {
    justify-content: end;
}
</style>
<script>
import axios from 'axios';
export default {
    data(){
        return {
        }
    },
    methods: {
      // the logout method is specific to this component, uses an api call to destroy the user's session
        logOut(){
            axios.post("/api/logout")
            .then(response => {
            console.log(response.data);
            if(response.data == "success"){
                localStorage.setItem('user', 'unknown');
                window.location.replace('/login');
            }
            else{

            }
        })
        }
    }
}
</script>