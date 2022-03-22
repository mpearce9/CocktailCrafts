<template>
<v-app>
  <v-card class="overflow-hidden" color = "rgb(15,12,12)">
    <v-app-bar
      fixed
      color = "rgb(15,12,12)"
      dark
    >
      <v-toolbar-title>cocktail crafts</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn plain href="/">
        HOME
      </v-btn>
      <v-btn plain href = "/discover">
        DISCOVER
      </v-btn>
      <v-btn plain href = "/login">
        LOGIN
      </v-btn>
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
    fixed
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="rgb(15, 12, 12) py-4 text-center white--text"
        cols="12"
      >
      <v-btn plain href="/">
        ABOUT US
      </v-btn>
      <v-btn plain href = "/discover">
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