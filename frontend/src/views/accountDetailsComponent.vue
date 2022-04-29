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
          <p style="color:white">Created Cocktails: </p>
          <select  style="width: 180px; background-color: white; box-shadow: 1px 1px 2px 2px; color:black" >
              <option style="color:black" href="/home">Test</option>
          </select>
          <br><br>
          <v-btn block color = "info" style="color:white" href="/create">Create a Cocktail</v-btn>
          <br><br>
        </form>

      </v-col>

    </v-row>
  </v-container>
</template>
diff --git a/frontend/src/router/index.js b/frontend/src/router/index.js
