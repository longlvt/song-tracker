import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      // Update "token" to state.token
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user) {
      // Update "user" to state.user
      state.user = user
    }
  },
  actions: {
    setToken ({commit}, token) {
      // Call setToken mutation
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      // Call setToken mutation
      commit('setUser', user)
    }
  }
})
