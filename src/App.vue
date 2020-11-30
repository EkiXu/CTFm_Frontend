<template>
  <v-app id="app">
    <NavMenu />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue'
export default {
  name: 'App',
  components: {
    NavMenu
  },
  data: () => ({
    drawer: null
  }),
  created () {
    this.$vuetify.theme.dark = true
  }
}
</script>

<style lang="scss">
html {
  width: 100%;
  height: 100%;
}
body{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app{
  width: 100%;
  height: 100%;
  overflow: auto;
}
::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 0px;
}

::-webkit-scrollbar-thumb {
  cursor: pointer;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.25);
  -webkit-transition: color 0.2s ease;
  transition: color 0.2s ease;
}

::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(0, 0, 0, 0.15);
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(128, 135, 139, 0.8);
}
</style>
