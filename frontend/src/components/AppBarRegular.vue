<template>
<div>
<!-- this is the regular navigation bar for a user who is not logged in, only shows home and login page -->
<v-btn plain to="/">
        HOME
      </v-btn>
      <v-btn plain to = "/login">
        LOGIN
      </v-btn>
      </div>
</template>
<style scoped>
div {
    align-content: right;
}
</style>