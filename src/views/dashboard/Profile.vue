<template>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
    <v-row style="height:56px" />
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <BaseCard color="#03a9be">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Profile
            </div>
            <div class="subtitle-1 font-weight-light">
              Edit your profile
            </div>
          </template>

          <v-form
            ref="updateForm"
            lazy-validation
          >
            <v-container class="py-0">
              <v-row>
                <v-col
                  cols="12"
                  v-if="!this.userProfile.is_verified"
                >
                  <v-alert
                    dense
                    outlined
                    border="left"
                    type="warning"
                  >
                    Please check your email to actviate your account!
                  </v-alert>
                </v-col>
                <v-col
                  :cols="userProfile.is_verified ? 12:8"
                >
                  <v-text-field
                    label="Email Address"
                    v-model="userProfile.email"
                    :rules="rules.emailRules"
                    :readonly="userProfile.is_verified"
                  />
                </v-col>
                <v-col
                  v-if="!userProfile.is_verified"
                  cols="4"
                >
                  <v-btn
                    block
                    @click="sendVerifyEmail"
                  >Verify</v-btn>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Username"
                    v-model="userProfile.username"
                    readonly
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Nickname"
                    v-model="userProfile.nickname"
                    :rules="rules.nicknameRules"
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Solved Amount"
                    readonly
                    v-model="userProfile.solved_amount"
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Points"
                    readonly
                    v-model="userProfile.points"
                  />
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    label="Old Password"
                    type="password"
                    v-model="userProfile.old_password"
                    :rules="rules.oldPasswordRules"
                  />
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    label="New Password"
                    type="password"
                    v-model="userProfile.new_password"
                    :rules="rules.newPasswordRules"
                  />
                </v-col>
                <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn
                    color="#00bcd4"
                    class="mr-0"
                    @click="updateUserInfo"
                  >
                    Update Profile
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters,mapActions} from 'vuex'
import BaseCard from '@/components/BaseCard.vue'
import {getUserDetailByIDAPI,updateUserDetailByIDAPI,sendVerifyEmailAPI} from '@/api/user'
export default {
  components: {
    BaseCard
  },
  data(){
    return {
      userProfile:{
        email:'',
        username:'',
        nickname:'',
        old_password: '',
        new_password:'',
        is_verified:true,
      },
      rules: {
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
        ],
        nicknameRules: [
          v => !!v || 'NickName is required',
          v => (v && v.length >= 3) || 'name must be more than 4 characters',
          v => (v && v.length <= 16) || 'name must be less than 16 characters',
          v => /^[a-zA-Z0-9_-]{3,16}$/.test(v) ||  'Nickname must be valid'
        ],
        oldPasswordRules: [
          v => !!v || 'Old Password is required',
        ],
        newPasswordRules: [
          v => ((v && v.length >= 8 )|| !v) || 'New Password must be more than 8 characters',
        ]
      }
    }
  },
  computed:{
    ...mapGetters('user', ['userInfo']) 
  },
  methods:{
    ...mapActions('user', ['UpdateUserInfo']),
    async genUserInfo(){
      const res = await getUserDetailByIDAPI(this.userInfo.id)
      this.userProfile = res.data
    },
    async sendVerifyEmail(){
      const res = await sendVerifyEmailAPI({"email":this.userProfile.email})
      if(res.status == 200){
        this.$vToastify.success(res.data.detail)
      }
    },
    updateUserInfo(){
      if (this.$refs.updateForm.validate()) {
        const res = updateUserDetailByIDAPI(this.userInfo.id,this.userProfile)
        res.then(() => {
          this.$vToastify.success("Profile Update Successfully!")
          this.UpdateUserInfo({id:this.userInfo.id,nickname:this.userProfile.nickname,username:this.userProfile.username})
        }).catch(error => {
          this.valid = false
          const data = error.response.data
          if(data.detail){
            this.$vToastify.error(data.detail)
            return 
          }
          var message
          for (var key in data){
            message = data[key][0];
          }
          this.$vToastify.error(message)
          return
        })
      }
    }
  },
  created(){
    this.genUserInfo()
  },
}
</script>

<style>

</style>
