<template>
  <v-container style="background-color:black">
    <v-row class="text-center">

      <v-col class="mb-4">
        <h2 style="color:white">
          Account Details
        </h2>

        <form style="background-color:#3760D6; margin:auto; width: 400px">
          <p style="color:white">Email: </p>
          <input type="email" size="20" style="box-shadow: 1px 1px 2px 2px;" />
          <br> <br>
          <p style="color:white">Name: </p>
          <input type="text" size="20" style="box-shadow: 1px 1px 2px 2px;" />
          <br><br>
          <p style="color:white">Activities: </p>
          <select  style="width: 180px; background-color: white; box-shadow: 1px 1px 2px 2px; color:black" >
              <option style="color:black">Activity 1</option>
              <option style="color:black">Activity 2</option>
              <option style="color:black">Activity 3</option>
              <option style="color:black">Activity 4</option>
          </select>
          <br><br>
          <p style="color:white">Added Ingredients: </p>
          <br>{{liquor}}<br>{{mixer}}<br>{{garnish}}<br>{{bitters}}
        </form>

      </v-col>

    </v-row>
  </v-container>
</template>
diff --git a/frontend/src/router/index.js b/frontend/src/router/index.js
