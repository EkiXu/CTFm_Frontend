import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import VueToastify from "vue-toastify";

// import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify)
Vue.use(VueToastify);


export default new Vuetify({
  theme: {
    themes: {
      dark: {
        primary: '#00bcd4',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#ff5252'
      }
    }
  }
})


