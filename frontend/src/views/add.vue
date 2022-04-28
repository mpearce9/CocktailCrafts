<template>
    <v-app>
      <v-card class = "addIngredients">
          <h2 style = "text-align: center;">Add Your Ingredients Here</h2>
            <v-form
            ref="form1"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
            v-model="liquor"
            :counter="10"
            label="liquor"
            required
            ></v-text-field>

            <v-text-field
            v-model="mixers"
            label="mixers"
            required
            ></v-text-field>

            <v-text-field
            v-model="garnish"
            label="garnsih"
            required
            ></v-text-field>

            <v-text-field
            v-model="bitters"
            label="bitters"
            ></v-text-field>

            <v-btn
            color="info" block href = "/account"
            >
            ADD
            </v-btn>
        </v-form>
        </v-card>
      </v-col>
    </v-app>
</template>

