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
                    <v-btn block color = "info" href = "/ingredients">Bar Shelf</v-btn>
                </v-col>
                <v-col>
                    <h1>&zwnj;</h1>
                </v-col>
                <v-col cols="3">
                    <v-btn block color = "info" href = "/search">Search</v-btn>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="3">
                    <v-img id = "homeimg"
                    :aspect-ratio = "46/46"
                    max-width = "350"
                    src="https://cdn2.lamag.com/wp-content/uploads/sites/6/2016/04/Bestia_DTLA_0630_RT_flat.jpg"
                    ></v-img>
                </v-col>
                <v-col>
                    <h1>&zwnj;</h1>
                </v-col>
                <v-col cols="3">
                    <v-img id = "homeimg"
                    :aspect-ratio = "46/46"
                    max-width = "350"
                    src="https://cdn11.bigcommerce.com/s-i2kcf6ha/images/stencil/1000x1000/products/315/2715/double_shelves11__58398.1552069154.jpg?c=2"
                    ></v-img>
                </v-col>
                <v-col>
                    <h1>&zwnj;</h1>
                </v-col>
                <v-col cols="3">
                    <v-img id = "homeimg"
                    :aspect-ratio = "46/46"
                    max-width = "350"
                    src="https://www.barschool.net/sites/default/files/styles/image_gallery_xl/public/images/node/article/30-different-cocktails-on-bar.jpg?itok=IDG3unM2"
                    ></v-img>
                </v-col>
            </v-row>
        </div>
        </v-card>
    </v-row>
    </v-container>
    </v-app>
</template>