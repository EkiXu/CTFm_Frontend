<template>
  <v-container class="home">
    <vue-markdown
      class="article"
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

<style lang="scss">
.home{
  text-align: center;
}
.article{
  height: calc(100vh - 64px);
  overflow: auto;
  img{
    max-width: 100%;
  }
}
</style>
