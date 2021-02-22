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
              <v-toolbar-title>Reset Password</v-toolbar-title>
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
                ref="resetPasswordForm"
                lazy-validation
              >
                <v-text-field
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  v-model="resetPasswordForm.password"
                  :rules="rules.passwordRules"
                />
                <v-text-field
                  id="rePassword"
                  label="RePassword"
                  name="rePassword"
                  prepend-icon="mdi-lock-outline"
                  type="password"
                  v-model="resetPasswordForm.rePassword"
                  :rules="rules.rePasswordRules"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary"
                @click="submitForm"
              >
                Reset
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
import {restPasswordAPI} from '@/api/auth'
export default {
  name: 'Login',
  components: {},
  data () {
    return {
      valid: true,
      curYear: 0,
      resetPasswordForm: {
        username: '',
        password: '',
        invalid: false,
        errorMsg: ''
      },
      isWaiting: false,
      rules: {
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 8) || 'Password must be more than 8 characters'
        ],
        rePasswordRules: [
          v => !!v || 'RePassword is required',
          v =>
            (v && v.length >= 8) || 'Password must be more than 8 characters',
          v =>
            (!!v && v) === this.resetPasswordForm.password ||
            'Password must be match with RePassword'
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.isWaiting = true
      if (this.$refs.resetPasswordForm.validate()) {
        const res = restPasswordAPI(this.$route.params.user_id,this.$route.params.token,{"password":this.resetPasswordForm.password})
        res.then(value => {
          this.$vToastify.success(value.data.detail)
          this.$router.push({ name: 'login' })
        }).catch(error => {
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
