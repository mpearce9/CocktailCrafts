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
                <h1 style = "font-size:2.0em;">Discover your favorite cocktail today...</h1>
            </v-row>
            <v-row>
                <h1>&zwnj;</h1>
            </v-row>
            <v-row>
                <v-col cols="3">
                    <v-btn block color = "info" href = "/popular">Popular</v-btn>
                </v-col>
                <v-col>
                    <h1>&zwnj;</h1>
                </v-col>
                <v-col cols="3">
                    <v-btn block color = "info" href = "/barShelf">Bar Shelf</v-btn>
                </v-col>
                <v-col>
                    <h1>&zwnj;</h1>
                </v-col>
                <v-col cols="3">
                    <v-btn block color = "info" href = "/search">Search</v-btn>
                </v-col>
            </v-row>
            <v-row>
                <h1>&zwnj;</h1>
            </v-row>
            <v-row justify="center">
                <v-text>By joining Cocktail Crafts today, you will have access to hundreds of different cocktails. You can browse through the recipes of the most popular cocktails, search up recipes based on the ingredients you have and use the search feature to find the recipe of a cocktail you’ve been wanting to try out amongst other features. </v-text>
            </v-row>
        </div>
        </v-card>
    </v-row>
    </v-container>
    </v-app>
</template>