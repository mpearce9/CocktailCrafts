<template>
  <v-container style="background-color:black">
    <v-row class="text-center">

      <v-col class="mb-4">
        <h2 class="" style="color:white">
          Have a question?
        </h2>

        <h2 class="subheading font-weight-regular" style="color:white">
          Contact us! <br>
        </h2>
        <form style="background-color:#3760D6; margin:auto; width: 400px">
          <p style="color:white">Name: </p>
          <input type="text" size="20" style="box-shadow: 1px 1px 2px 2px; color:black" placeholder=" John Doe" />
          <br><br>
          <p style="color:white">Email: </p>
          <input type="email" size="20" style="box-shadow: 1px 1px 2px 2px; color:black" placeholder=" john@example.com" />
          <br> <br>
          <p style="color:white">Question: </p>
          <v-textarea name="input-7-1" class="my-textarea" style="width:250px; margin:auto" height="10" background-color="white" color="black" outlined></v-textarea>
          <v-btn color = "info">Submit</v-btn>
          <p>&nbsp &nbsp</p>
        </form>

      </v-col>

    </v-row>
  </v-container>
</template>

<style>

  input[type="text"], input[type="email"] {
    background-color: white;
  }

  .button {
    background-color: white;
    padding: 4px 16px;
    margin: 12px;
  }

  .my-textarea textarea { 
    color: black !important;
    }
</style>
diff --git a/frontend/src/views/accountDetailsComponent.vue b/frontend/src/views/accountDetailsComponent.vue
