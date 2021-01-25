<template>
  <v-btn
    color="blue darken-2"
    dark
    fab
    target="_blank"
    :href="url"
  >
    <v-icon>
      mdi-cloud-download
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'AttachmentButton',
  props:{
    url: {
      type: String,
      default: ''
    },
  },
}
</script>

<style>

</style>