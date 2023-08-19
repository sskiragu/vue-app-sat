import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoggedIn: false
  },
  getters: {
  },
  mutations: {
    setIsLoggedIn(state){
      const authToken = localStorage.getItem('auth-token')
      if(authToken){
        state.isLoggedIn = true
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
