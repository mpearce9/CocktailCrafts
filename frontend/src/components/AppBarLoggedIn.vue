<template>
<div>
      <v-btn plain href="/">
        HOME
      </v-btn>
      <v-btn plain href = "/discover">
        DISCOVER
      </v-btn>
      <v-btn plain href = "/search">
        SEARCH
      </v-btn>
      <v-btn plain href = "/account">
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
                window.location.replace('/login');
            }
            else{

            }
        })
        }
    }
}
</script>