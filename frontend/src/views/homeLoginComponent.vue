<template>
    <v-app>
    <v-container>
    <v-row
      class="mb-8"
      no-gutters
    >
      <v-col md="4" offset-md="2">
        <v-img id = "homeimg"
        :aspect-ratio = "46/46"
        max-width = "350"
        src="https://media.istockphoto.com/vectors/shaker-neon-logo-cocktail-party-neon-sign-on-wall-vector-background-vector-id1091483538?k=20&m=1091483538&s=170667a&w=0&h=EFdFjyv3Igo_sN9hZm0BDI_7ZNxZkpzWfjBJCx_6IPY="
        ></v-img>
      </v-col>
      <v-col
        md="4"
        offset-md="0"
      >
        <v-card
        color = "rgb(15,12,12)"
        id = "homecard"
        >
          <div>
            <h1 style = "font-size:3.5em;">ENJOY A DRINK</h1>
            <p style = "font-size:1.25em;">Wondering what your next drink is going to be? Cocktail Crafts is for you. Choose your ingredients and start crafting!</p>
            <v-btn color = "info" to = "/search">Start Crafting!</v-btn>
        </div>
        </v-card>
      </v-col>
    </v-row>
    </v-container>
    </v-app>
</template>