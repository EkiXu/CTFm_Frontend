<template>
  <v-speed-dial v-model="fab" direction="left" :transition="transition">
    <template v-slot:activator>
      <v-btn v-model="fab" color="blue darken-2" dark fab>
        <v-icon v-if="fab">mdi-close</v-icon>
        <v-icon v-else>mdi-docker</v-icon>
      </v-btn>
    </template>
    <template v-if="container.status == 0">
      <v-btn fab dark small color="green" @click="requestChallengeContainer">
        <v-icon>mdi-play</v-icon>
      </v-btn>
    </template>
    <template v-else>
      <v-btn fab dark small color="indigo" @click="renewChallengeContainer" >
        <v-icon>mdi-sync</v-icon>
      </v-btn>
      <v-btn fab dark small color="red" @click="deleteChallengeContainer">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </template>
    <template v-if="url !== null && url !== ''">
      <v-btn
        color="blue darken-2"
        dark
        fab
        small
        target="_blank"
        :href="url"
      >
        <v-icon>mdi-cloud-download</v-icon>
      </v-btn>
    </template>
  </v-speed-dial>
</template>

<script>
import {createChallengeContainerByIDAPI,renewChallengeContainerByIDAPI,deleteChallengeContainerByIDAPI} from '@/api/challenge'
export default {
  name:"DockerButton",
  props:{
    url: {
      type: String,
      default: ''
    },
    challenge_id:{
      type: Number,
      required: true
    },
    container:{
      type:Object,
      required: true
    }
  },
  data: () => ({
    fab:false,
    transition: 'slide-x-reverse-transition',
  }),
  methods: {
    async requestChallengeContainer(){
      const res = await createChallengeContainerByIDAPI(this.challenge_id);
      this.$emit("updateContainerInfo",res.data)
    },
    async renewChallengeContainer(){
      const res = await renewChallengeContainerByIDAPI(this.challenge_id);
      this.$emit("updateContainerInfo",res.data)
    },
    async deleteChallengeContainer(){
      const res = await deleteChallengeContainerByIDAPI(this.challenge_id);
      this.$emit("updateContainerInfo",{status:0})
    }
  }
};
</script>

<style>
</style>