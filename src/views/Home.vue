<template>
  <v-container class="home">
    <vue-markdown
      style="overflow-wrap: break-word;"
      :source="contestInfo.description"
    />
  </v-container>
</template>

<script>
import { getContestAPI } from '@/api/contest'
import {mapGetters} from 'vuex'
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    
  },
  computed:{
    ...mapGetters('contest', ['contestInfo']),
  },
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
