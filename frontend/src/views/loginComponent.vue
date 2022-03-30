<template>
    <v-app>
    <v-container>
    <v-row
      class="mb-8"
      no-gutters
    >
      <v-col md="4" offset-md="1">
          <h1>join the <strong><span style = "font-size:1.75em; color:#1260cc;">fun</span></strong>.</h1>
          <v-card class = "logincard">
            <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
            v-model="emailbox"
            :rules="emailRules"
            label="E-mail"
            required
            ></v-text-field>

            <v-text-field
            v-model="passwordbox"
            :rules="passwordRules"
            label="Password"
            required
            ></v-text-field>

            <v-btn
            color="info" block @click="loginUser"
            >
            log in
            </v-btn>
        </v-form>
        </v-card>
      </v-col>
      <v-divider
      class = "mx-16"
        vertical
      ></v-divider>
      <v-col
        md="4"
        offset-md="0"
      >
      <v-card class = "logincard">
          <h2 style = "text-align: center;">Don't have an account?</h2>
            <v-form
            ref="form1"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
            v-model="namebox"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
            ></v-text-field>

            <v-text-field
            v-model="emailbox1"
            :rules="emailRules"
            label="E-mail"
            required
            ></v-text-field>

            <v-text-field
            v-model="passwordbox1"
            :rules="passwordRules"
            label="Password"
            required
            ></v-text-field>

            <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree to our terms and agreements?"
            required
            ></v-checkbox>

            <v-btn
            color="info" block @click="signUp"
            >
            join now
            </v-btn>
        </v-form>
        </v-card>
      </v-col>
    </v-row>
    </v-container>
    </v-app>
</template>


<script>
  import axios from 'axios';
  const apiClient = axios.create({ baseUrl: 'http://localhost:3000', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
  async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
  }
  export default {
    data(){
        return{
        valid: false,
        emailbox: '',
        emailbox1:'',
        passwordbox:'',
        passwordbox1:'',
        namebox:'',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        passwordRules:[
            v => !!v || 'Password is required',
            v => (v && v.length >8) || 'Password must be more than 8 characters',
        ],
        nameRules: [
          v => !!v || 'Name is required',
          v => v.length <= 10 || 'Name must be less than 10 characters',
        ],
        checkbox: false,
      }
      },
      methods:{
            loginUser(){
                apiClient.get('/api/login', {
                    email: this.email,
                    password: this.password
                })
                .then(response => {
                // JSON responses are automatically parsed.
                    if(response.data.local){
                        this.$message({
                            message: 'Login Successful...',
                            type: 'success'
                        });
                        this.setUserData(response.data.local);
                        this.fullscreenLoading = false;
                        this.$router.push({name: 'User'})
                        
                    }else{
                        this.fullscreenLoading = false;
                        this.errorMsg = response.data;
                    }
                   
                })
                .catch(e => {
                    this.errors.push(e)
                })
            },
            signUp(){
        //     apiClient.post('/api/signup', {
        //         name: this.name,
        //         email: this.emailbox1,
        //         password: this.passwordbox1
        //     })
        //     .then(response => {
        //         if(response.data.success){
        //             console.log(response);
        //         }else{
        //             alert(response.data);
        //         }
        //     })
        //     .catch(e => {
        //         this.errors.push(e)
        //     })
        // }
            postData("/api/signup", { "name":"cameron ownbey", "email":"cameron.ownbey@gmail.com", "password":"cam1234789" })
            .then(response => console.log(response))
            .then(data => {
              console.log('Success:', data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
      }
      }
  }
</script>