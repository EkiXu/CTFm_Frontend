<template>
  <div class="register">
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
          md="6"
        >
          <v-card class="elevation-12">
            <v-toolbar
              color="primary"
              dark
              flat
            >
              <v-toolbar-title>Register</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form
                ref="registerForm"
                v-model="valid"
              >
                <v-text-field
                  v-model="registerForm.email"
                  :rules="rules.emailRules"
                  label="Email"
                  name="login"
                  prepend-icon="mdi-email"
                  type="text"
                />
                <v-text-field
                  v-model="registerForm.username"
                  :rules="rules.usernameRules"
                  label="Username"
                  name="login"
                  prepend-icon="mdi-account"
                  type="text"
                />
                <v-text-field
                  v-model="registerForm.nickname"
                  :rules="rules.nicknameRules"
                  label="Nickname"
                  name="login"
                  prepend-icon="mdi-account-outline"
                  type="text"
                />
                <v-text-field
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  v-model="registerForm.password"
                  :rules="rules.passwordRules"
                />
                <v-text-field
                  id="rePassword"
                  label="RePassword"
                  name="rePassword"
                  prepend-icon="mdi-lock-outline"
                  type="password"
                  v-model="registerForm.rePassword"
                  :rules="rules.rePasswordRules"
                />
                <v-row justify="center" v-if="sitekey">
                  <vue-recaptcha
                    ref="recaptcha"
                    @verify="recaptchaVerify"
                    @expired="recaptchaOnExpired"
                    :sitekey="sitekey"
                    :load-recaptcha-script="true"
                    theme="dark"
                    recaptcha-host="www.recaptcha.net"
                  />
                </v-row>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                @click="submitForm"
                color="primary"
              >
                Register
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';
import { mapActions } from 'vuex'
import { registerAPI,recaptchaAPI } from '@/api/auth'
export default {
  name: 'Register',
  components: { VueRecaptcha },
  data () {
    return {
      sitekey: '',
      isWaiting: false,
      registerForm: {
        email: '',
        username: '',
        nickname: '',
        password: '',
        rePassword: '',
        recaptcha:'',
      },
      valid: true,
      errorMsg: '',
      rules: {
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
        ],
        usernameRules: [
          v => !!v || 'Username is required',
          v => (v && v.length >= 3 ) || 'name must be more than 2 characters',
          v => (v && v.length <= 16) || 'name must be less than 17 characters',
          v => /^[a-zA-Z0-9_-]{3,16}$/.test(v) ||  'Username must be valid'
        ],
        nicknameRules: [
          v => !!v || 'NickName is required',
          v => (v && v.length >= 3) || 'name must be more than 4 characters',
          v => (v && v.length <= 16) || 'name must be less than 16 characters',
          v => /^[a-zA-Z0-9_-]{3,16}$/.test(v) ||  'Nickname must be valid'
        ],
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 8) || 'Password must be more than 8 characters'
        ],
        rePasswordRules: [
          v => !!v || 'RePassword is required',
          v =>
            (v && v.length >= 8) || 'Password must be more than 8 characters',
          v =>
            (!!v && v) === this.registerForm.password ||
            'Password must be match with RePassword'
        ]
      }
    }
  },
  created(){
    let res = recaptchaAPI()
    res.then((res) => {
      //console.log(res.data.api_key)
      this.sitekey = res.data.api_key
    }).catch(error => {
      this.valid = false
      this.$vToastify.error(error.message)
      this.registerForm.recaptcha = ''
      this.$refs.recaptcha.reset();
      return
    })
  },
  methods: {
    ...mapActions('user', ['LoginIn']),
    recaptchaVerify(response) {
      this.registerForm.recaptcha = response
    },
    recaptchaOnExpired() {
      this.registerForm.recaptcha = ''
      this.$vToastify.warning("recaptcha Expired.")
    },
    submitForm () {
      if (this.$refs.registerForm.validate()) {
        if(this.registerForm.recaptcha === ''){
          this.$vToastify.error("Please Verfiy Recaptcha!")
          return
        }
        const res = registerAPI(this.registerForm)
        res.then(() => {
          this.$vToastify.success("Register Successfully!")
          this.$vToastify.success("Please Check your email to activate your account!")
          this.$router.push({ name: 'login' })
        }).catch(error => {
          this.valid = false
          this.$vToastify.error(error.message)
          this.registerForm.recaptcha = ''
          this.$refs.recaptcha.reset();
          return
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
