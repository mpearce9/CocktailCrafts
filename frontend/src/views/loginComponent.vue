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
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            ></v-text-field>

            <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
            ></v-text-field>

            <v-btn
            color="info" block
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
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
            ></v-text-field>

            <v-text-field
            v-model="email1"
            :rules="emailRules"
            label="E-mail"
            required
            ></v-text-field>

            <v-text-field
            v-model="password1"
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
            color="info" block
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
  export default {
    data: () => ({
      valid: false,
      email: '',
      email1:'',
      password:'',
      password1:'',
      name:'',
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
    })
  }
</script>