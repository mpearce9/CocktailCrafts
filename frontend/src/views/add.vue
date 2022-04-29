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
            v-model="liquorbox"
            :counter="15"
            :rules="nameRules"
            label="Liquor"
            ></v-text-field>

            <v-text-field
            v-model="mixerbox"
            :counter="15"
            :rules="nameRules"
            label="Mixer"
            ></v-text-field>

            <v-text-field
            v-model="garnishbox"
            :counter="15"
            :rules="nameRules"
            label="Garnish"
            ></v-text-field>

            <v-text-field
            v-model="bittersbox"
            :counter="15"
            :rules="nameRules"
            label="Bitters"
            ></v-text-field>

            <v-btn
            color="info" block href = "/account"
            >
            ADD
            </v-btn>
            <v-alert
              :value="addalert"
              type ="success"
              dense
              prominent
              dismissable
              transition="scale-transition"
              id = "addalert"
            >
        </v-form>
        </v-card>
      </v-col>
    </v-app>
</template>

<script>
  import axios from 'axios';
  const apiClient = axios.create({ headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
  export default {
    data(){
        return{
        valid: true,
        liquorbox: '',
        mixerbox:'',
        garnishbox:'',
        bittersbox:' ',
        addalert:false,
        nameRules: [
          v => !!v || 'Name is required',
          v => v.length <= 15 || 'Name must be less than 15 characters',
          v => (v && v.length >2) || 'Name must be more than 2 characters'
        ],
      }
      },
      methods:{
            addIngredients(){
                  console.log(response.data);
                  if(liquorbox.data == "success"){
                      localStorage.addItem()
                      this.addalert = true;
                 }
                 if(mixerbox.data == "success"){
                      localStorage.addItem()
                      this.addalert = true;
                 }
                 if(garnishbox.data == "success"){
                      localStorage.addItem()
                      this.addalert = true;
                 }
                 if(bitterbox.data == "success"){
                      localStorage.addItem()
                      this.addalert = true;
                 }
            }
      }
  }
  
</script>

<style scoped>
 #addalert {
    margin-top:5px;
}
</style>