<template>
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
    align-content: right;
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