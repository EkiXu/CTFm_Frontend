<template>
  <div>
    <vue-particles
      color="#dedede"
      :particle-opacity="0.8"
      :particles-number="30"
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
          <v-row align="center">
            <v-col align="center">
              <v-alert
                outlined
                :type="type"
                prominent
                border="left"
              >
              {{detail}}
              </v-alert>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import { activateAPI } from '@/api/auth'
export default {
  name: 'ActivateEmail',
  data(){
    return {
        type:'success',
        detail:'',
    }
  },
  computed:{
    ...mapGetters('user', ['userInfo']),
  },
  async beforeCreate(){
    const res = await activateAPI(this.$route.params.user_id,this.$route.params.token)
    console.log(res)
    this.detail = res.data.detail
    if(res.status == 208){
      this.type ='warning'
    }else if(res.status == 200){
      this.type ='success'
    }else this.type = 'error'
    setTimeout(() => {
      this.$router.push({ name: 'profile' })
    }, 2000);
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
