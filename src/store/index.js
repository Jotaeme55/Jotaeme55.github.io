import { createStore } from 'vuex'



export default createStore({
  plugins: [],
  state: {
    language: "en",
  },
  mutations: {
    saveLanguage(state, language){
      state.language = language;
    },
    
  },
  actions: {
    saveLanguage({commit},language){
      commit("saveLanguage", language)
    },
    
  },
  modules: {
  }
})
