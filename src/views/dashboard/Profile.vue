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
              Edit Profile
            </div>
            <div class="subtitle-1 font-weight-light">
              Complete your profile
            </div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    label="Email Address"
                    v-model="userProfile.email"
                  />
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
                  />
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    label="Old Password"
                    type="password"
                    v-model="userProfile.oldPassword"
                  />
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    label="New Password"
                    type="password"
                    v-model="userProfile.password"
                  />
                </v-col>
                <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn
                    color="#00bcd4"
                    class="mr-0"
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
import { mapGetters} from 'vuex'
import BaseCard from '@/components/BaseCard.vue'
import {getUserDetailByIDAPI} from '@/api/user'
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
        oldPassword: '',
        password:'',
      },
    }
  },
  computed:{
    ...mapGetters('user', ['userInfo']) 
  },
  methods:{
    async genUserInfo(){
      let res = await getUserDetailByIDAPI(this.userInfo.id)
      this.userProfile = res.data
    },
    async updateUserInfo(){
      
    }
  },
  created(){
    this.genUserInfo()
  },
}
</script>

<style>

</style>
