<template>
  <v-container>
    <!-- these account details are shown based on the current logged in user -->
    <v-row justify="center">
      <v-col class="mb-4">
        <v-card>
          <v-row justify="center">
            <h1>
              Account Details
            </h1>
          </v-row>
          <v-row justify="center">
            <h2>Name: {{user}}</h2>
          </v-row>
          <v-row justify="center">
            <h2>Email: {{useremail}}</h2>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col>
        <v-card>
          <v-container style="width: 75%">
            <v-row justify="center">
              <h1>Edit Account Details</h1>
            </v-row>
            <v-row justify="center">
                <v-text-field label="Change Name" v-model="newName"/>
                <v-btn bottom @click="changeName">Apply Change</v-btn>
            </v-row>
            <v-alert
              :value="nameChanged"
              type ="success"
              dense
              close-text="Close Alert"
              dismissible
              transition="scale-transition"
              >
              Name changed Successfully
          </v-alert>
            <v-form ref="passForm" lazy-validation v-model="pChangeValid">
              <v-row justify="center">
                <v-text-field
                :append-icon= "pass ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                @click:append= "() => (pass = !pass)"
                :type="pass ? 'password' : 'text'" 
                :rules="passwordRules"
                label="Change Password" 
                v-model="newPass"/>
              </v-row>
              <v-row justify="center">
                <v-text-field 
                :append-icon= "passConfirm ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                @click:append= "() => (passConfirm = !passConfirm)"
                :type="passConfirm ? 'password' : 'text'" 
                :rules="passwordRules" 
                label="Confirm Password" 
                v-model="newPassConfirm"/>
              </v-row>
              <v-row justify="center">
                <v-btn  @click="changePass" class="mb-4" :disabled="!pChangeValid">Change Password</v-btn>
              </v-row>
              <v-alert
                :value="passChangedSuccess"
                type ="success"
                dense
                close-text="Close Alert"
                dismissible
                transition="scale-transition"
                >
                Password Changed Succesfully
              </v-alert>
              <v-alert
                  :value="passChangedFailed"
                  type ="error"
                  dense
                  close-text="Close Alert"
                  dismissible
                  transition="scale-transition"
                  >
                  Password confirmation should match new password
              </v-alert>
            </v-form>
            </v-container>
            
        </v-card>
      
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
const axios = require('axios')
export default {
  data() {
    return {
      user: "",
      useremail: "",
      newName: "",
      newPass: "",
      newPassConfirm: "",
      nameChanged: false,
      passChangedSuccess: false,
      passChangedFailed: false,
      passwordRules:[
            v => (v && v.length >6) || 'Password must be more than 6 characters',
        ],
      pass: true,
      passConfirm: true,
      pChangeValid: false
    }
  },
  async created(){
     await axios.get("/api/logininfo")
        .then(response => {
            if(response.data.name){
                this.user = response.data.name;
                this.useremail = response.data.email
            }
            else{
                localStorage.setItem('user', 'unknown');
                this.user = "Unknown User"
            }
        })
  },
  methods: {
    async changeName(){
      if(this.newName != ""){
        await axios.post("/api/changeName", { email: this.useremail, name: this.newName})
          .then(response => {
            this.user = this.newName
            this.nameChanged = true
          })
        this.newName = ""
      }
    },
    async changePass(){
      if(this.newPass == this.newPassConfirm && this.newPass != ""){
        await axios.post("/api/changePass", {email: this.useremail, pass: this.newPass})
          .then(response => {
            this.passChangedSuccess = true
          })
        this.newPass = ""
        this.newPassConfirm = ""
      }
      else {
        this.passChangedFailed = true
        this.$refs.passForm.validate()
      }
    }
  }
}
</script>