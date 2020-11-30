import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from '@/store/index'
import vuetify from './plugins/vuetify'
import './plugins/chartist'
import './plugins/typed'
import './plugins/particles'
import './plugins/markdown'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
