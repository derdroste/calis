import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import user from './user'
import manipulate from './manipulate'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: { },
  mutations: { },
  actions: { },
  modules: {
    user,
    manipulate
  },
  plugins: [vuexLocal.plugin]
})
