<template>
  <div>
    <vue-particles
      color="#dedede"
      :particle-opacity="0.8"
      :particles-number="50"
      shape-type="circle"
      :particle-size="12"
      lines-color="#dedede"
      :lines-width="1"
      :line-linked="true"
      :line-opacity="0.4"
      :lines-distance="150"
      :move-speed="2"
      :hover-effect="true"
      hover-mode="grab"
      :click-effect="false"
    />
    <v-container
      class="fill-height warpper"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="4"
        >
          <v-card
            class="elevation-12"
            :loading="isWaiting"
          >
            <v-toolbar
              color="primary"
              dark
              flat
            >
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-alert
                v-if="!valid"
                dense
                outlined
                type="error"
              >
                {{ errorMsg }}
              </v-alert>
              <v-form
                ref="loginForm"
                lazy-validation
              >
                <v-text-field
                  v-model="loginForm.username"
                  label="Username"
                  name="username"
                  prepend-icon="mdi-account"
                  type="text"
                  :rules="rules.usernameRules"
                />
                <v-text-field
                  v-model="loginForm.password"
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  :rules="rules.passwordRules"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary"
                @click="submitForm"
              >
                Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
// @ is an alias to /src
import { mapActions } from 'vuex'
const path = process.env.VUE_APP_BASE_API
export default {
  name: 'Login',
  components: {},
  data () {
    return {
      valid: true,
      curYear: 0,
      loginForm: {
        username: '',
        password: '',
        invalid: false,
        errorMsg: ''
      },
      path: path,
      isWaiting: false,
      rules: {
        usernameRules: [
          v => !!v || 'Username is required',
          v =>
            (v && v.length >= 4) || 'Username must be more than 4 characters',
          v =>
            (v && v.length <= 12) || 'Username must be less than 12 characters'
        ],
        passwordRules: [v => !!v || 'Password is required']
      }
    }
  },
  created () {
    this.curYear = new Date().getFullYear()
  },
  methods: {
    ...mapActions('user', ['ObtainToken']),
    submitForm () {
      this.isWaiting = true
      if (this.$refs.loginForm.validate()) {
        const res = this.ObtainToken(this.loginForm)
        res.catch(error => {
            this.valid = false
            this.errorMsg = error.message
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.warpper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  display: flex;
}
</style>
