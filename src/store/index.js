import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import { user } from '@/store/modules/user'
import { contest } from '@/store/modules/contest'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['user','contest']
})
export const store = new Vuex.Store({
  modules: {
    user,
    contest
  },
  plugins: [vuexLocal.plugin]
})
