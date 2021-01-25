<template>
  <v-tooltip top>
    <template #activator="{ on, attrs }">
      <v-btn
        color="blue darken-2"
        dark
        fab
        target="_blank"
        :href="url"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>
          mdi-cloud-download
        </v-icon>
      </v-btn>
    </template>
    <span>Download Attachment</span>
  </v-tooltip>
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