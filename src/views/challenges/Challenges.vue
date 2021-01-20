<template>
  <v-row style="margin:0px;height:100%">
    <v-col
      cols="12"
      sm="6"
      md="5"
      style="height:100%"
      class="challenges_panel"
      name="challenges_panel"
    >
      <v-container class="challenges">
        <!--<h1>Test  {{ $route.params.type }}+1</h1>-->
        <v-col
          v-for="(challenge,index) in challengelist"
          :key="challenge.id"
          :class="activeIndex == index ? 'clicked' : ''"
          @click="select(index)"
        >
          <ChallengeCard
            :title="challenge.title"
            :summary="challenge.summary"
            :score="challenge.points"
            :id="challenge.id"
            :solved="challenge.solved"
          />
        </v-col>
      </v-container>
    </v-col>
    <router-view />
  </v-row>
</template>

<script>
// @ is an alias to /src
import {getChallengesListByCategoryNameAPI } from '@/api/challenge'
import ChallengeCard from '@/components/ChallengeCard.vue'
export default {
  name: 'Challenges',
  components: {
    ChallengeCard
  },
  data () {
    return {
      activeIndex: -1,
      challengelist: []
    }
  },
  created (){
    this.genChallengesList()
  },
  watch:{
    $route(to,from){
      this.genChallengesList()
    },
  },
  methods: {
    select (index) {
      this.activeIndex = index
    },
    async genChallengesList(){
      const res = await getChallengesListByCategoryNameAPI(this.$route.params.type);
      this.challengelist = res.data
    }
  }
}
</script>

<style lang="scss">
.challenges_panel{
  overflow: auto;  
}
.challenges{
  overflow: auto;
}
.clicked > .challenge_card{
  opacity: 1;
  transform: scale(1.05);
  box-shadow: 1px 5px 10px #01B99D30;
  background-color: #01B99D;
  transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,margin-top 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,background-color 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
</style>
