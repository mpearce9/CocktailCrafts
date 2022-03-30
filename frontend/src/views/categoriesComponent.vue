<template>
    <v-app>
    <v-container>
    <v-row
      class="mb-8"
    >
        <v-card
        color = "rgb(15,12,12)"
        id = "categoryCard"
        width = "100%"
        justify-center
        >
          <div>
            <v-row>
                <h1 style = "font-size:1.0em;">Categories</h1>
				<p>{{sample_cat.strCategory}}</p>
            </v-row>

        </v-card>
    </v-row>
    </v-container>
    </v-app>
</template>

<script>
import router from '../router/index'
export default {
 data() {
        return {
            sample_cat: [{"strCategory": "Ordinary Drink"}, {"strCategory": "Cocktail"}, {"strCategory": "Shake"}, {
			"strCategory": "Other\/Unknown"}, {"strCategory": "Cocoa"}, {"strCategory": "Shot"}, {"strCategory": "Coffee \/ Tea"
			}, {"strCategory": "Homemade Liqueur"}, {"strCategory": "Punch \/ Party Drink"}, {"strCategory": "Beer"}, {
			"strCategory": "Soft Drink"}]
        }
 }
}
</script>