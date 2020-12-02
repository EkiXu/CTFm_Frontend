import Vue from 'vue'
import Vuetify from 'vuetify/lib'


// import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify)



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


