import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import persistedState from 'vuex-persistedstate'
import routes from './modules/routes'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    routes
  },
  getters,
  plugins:[
    persistedState({
      paths:['user']
    })
  ]
})

export default store
