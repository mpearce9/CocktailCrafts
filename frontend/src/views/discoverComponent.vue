<template>
    <v-app>
    <v-container>
    <v-row
      class="mb-8"
    >
        <v-card
        color = "rgb(15,12,12)"
        id = "homecard"
        >
          <div>
            <v-row>
            <h1 style = "font-size:2.0em;">Discover your favorite cocktail today...</h1>
            </v-row>
            <v-row>
                <h1>&zwnj;</h1>
            </v-row>
            <v-row>
            <v-col cols="4">
                <v-btn block color = "info" href = "/popular">Popular</v-btn>
            </v-col>
            <v-col>
                <h1>&zwnj;</h1>
            </v-col>
            <v-col cols="4">
                <v-btn block color = "info" href = "/ingredients">Ingredients</v-btn>
            </v-col>
            <v-col>
                <h1>&zwnj;</h1>
            </v-col>
            <v-col cols="4">
                <v-btn block color = "info" href = "/search">Search</v-btn>
            </v-col>
            </v-row>
        </div>
        </v-card>
    </v-row>
    </v-container>
    </v-app>
</template>