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
        id = "aboutuscard"
        >
          <div>
            <h2 style = "font-size:3.5em;">Welcome to Cocktail Crafts...</h2>
            <p style = "font-size:1em;">Cocktail Crafts was founded by five UNC Charlotte students. At Cocktail Crafts we are
             passionate about the discovery of new recipes, trying new things, and going out of your comfort zone. Navigate 
             through our site to learn more about cocktails, use our different features. Have a question? Head over to our contact
             us tab and get in touch!</p>
        </div>
        </v-card>
      </v-col>
    </v-row>
    </v-container>
    </v-app>
</template>