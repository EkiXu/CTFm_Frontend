<template>
  <v-speed-dial v-model="fab" direction="left" :open-on-hover="hover" :transition="transition">
    <template v-slot:activator>
      <v-btn v-model="fab" color="blue darken-2" dark fab>
        <v-icon v-if="fab">mdi-close</v-icon>
        <v-icon v-else>mdi-docker</v-icon>
      </v-btn>
    </template>
    <v-btn fab dark small color="green">
      <v-icon>mdi-play</v-icon>
    </v-btn>
    <v-btn fab dark small color="indigo">
      <v-icon>mdi-sync</v-icon>
    </v-btn>
    <v-btn fab dark small color="red">
      <v-icon>mdi-delete</v-icon>
    </v-btn>
    <v-tooltip top v-if="url !== null && url !== ''">
      <template #activator="{ on, attrs }">
        <v-btn
          color="blue darken-2"
          dark
          fab
          small
          target="_blank"
          :href="url"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-cloud-download</v-icon>
        </v-btn>
      </template>
      <span>Download Attachment</span>
    </v-tooltip>
  </v-speed-dial>
</template>

<script>
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
    }
  },
  data: () => ({
    direction: "top",
    fab: false,
    fling: false,
    hover: false,
    tabs: null,
    top: false,
    right: true,
    bottom: true,
    left: false,
    transition: "slide-y-reverse-transition"
  }),
  methods: {
    async genChallengeContainerInfo(){

    },
    async requestChallengeContainer(){

    },
    async renewChallengeContainer(){

    },
    async deleteChallengeContainer(){
      
    }
  }
};
</script>

<style>
</style>