<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.jpg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Cocktail Crafts...
        </h1>

        <p class="subheading font-weight-regular">
          Cocktail Crafts was founded by five UNC Charlotte students. At Cocktail
          <br>
         Crafts we are passionate about the discovery of new recipes, trying new
         <br>
         new things, and going out of your comfort zone. Navigate through our site 
         <br>
         to learn more about cocktails, use our different features. Have a question?
         <br>
         Head over to our contact us tab and get in touch!
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>
