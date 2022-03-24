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
                <h1 style = "font-size:2.0em;">Welcome user,</h1>
            </v-row>
            <v-row>
                <h1>&zwnj;</h1>
            </v-row>
            <v-row justify="center">
                <v-col cols="6">
                    <v-btn block color = "info" href = "/savedRecipes">Your Saved Recipes</v-btn>
                </v-col>
                <v-col cols="6">
                    <v-btn block color = "info" href = "/accountDetails">Account Details</v-btn>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="6">
                    <v-btn block color = "info" href = "/recommendations">Recommendations</v-btn>
                </v-col>
                <v-col cols="6">
                    <v-btn block color = "info" href = "/random">Random</v-btn>
                </v-col>
            </v-row>
        </div>
        </v-card>
    </v-row>
    </v-container>
    </v-app>
</template>