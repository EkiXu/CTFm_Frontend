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
              <v-toolbar-title>Forget Your Password?</v-toolbar-title>
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
                ref="forgetPasswordForm"
                lazy-validation
              >
                <v-text-field
                  v-model="forgetPasswordForm.email"
                  :rules="rules.emailRules"
                  label="Email"
                  prepend-icon="mdi-email"
                  type="text"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary"
                @click="submitForm"
              >
                Send Reset Email
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
import {sendRestPasswordEmailAPI} from '@/api/auth'
export default {
  name: 'ForgetPassword',
  components: {},
  data () {
    return {
      valid: true,
      curYear: 0,
      forgetPasswordForm: {
        email: '',
        invalid: false,
        errorMsg: ''
      },
      isWaiting: false,
      rules: {
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
        ],
      }
    }
  },
  methods: {
    submitForm () {
      this.isWaiting = true
      if (this.$refs.forgetPasswordForm.validate()) {
        const res = sendRestPasswordEmailAPI({"email":this.forgetPasswordForm.email})
        res.then(value => {
            this.$vToastify.success(value.data.detail)
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
