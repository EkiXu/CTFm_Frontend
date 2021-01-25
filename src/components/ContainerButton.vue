<template>
  <div>
    <v-speed-dial
      v-model="fab"
      open-on-hover="hover"
      direction="left"
      transition="slide-x-reverse-transition"
    >
      <template #activator>
        <v-btn
          v-model="fab"
          color="blue darken-2"
          dark
          fab
        >
          <v-icon v-if="fab">
            mdi-close
          </v-icon>
          <v-icon v-else>
            mdi-cloud-download
          </v-icon>
        </v-btn>
      </template>
      <v-btn
        fab
        dark
        small
        color="red"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="yellow darken-2"
      >
        <v-icon>mdi-autorenew</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="green"
      >
        <v-icon>mdi-play</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>

<script>
export default {
    name: 'AttachmentButton',
}
</script>

<style>

</style>