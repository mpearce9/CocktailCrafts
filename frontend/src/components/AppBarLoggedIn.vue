<template>
<div>
      <v-btn plain @click="$router.push('/')">
        HOME
      </v-btn>
      <v-btn plain @click="$router.push('/discover')">
        DISCOVER
      </v-btn>
      <v-btn plain @click="$router.push('/search')">
        SEARCH
      </v-btn>
      <v-btn plain @click="$router.push('/account')">
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