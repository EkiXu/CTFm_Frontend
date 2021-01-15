<template>
  <v-container class="home">
    <div class="logo">
      <img
        alt="CTFm logo"
        src="../assets/logo2.png"
      >
    </div>
    <h1>Welcome to CTFm</h1>
  </v-container>
</template>

<script>
import { getContestAPI } from '@/api/contest'
// @ is an alias to /src
export default {
  name: 'Home',
  components: {

  }
}
</script>

<style lang="scss" scoped>
.home{
  text-align: center;
  .logo{
    margin: 70px 0;
  }
}
</style>
