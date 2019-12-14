import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
//import quoteServices from '@/services/QuoteService'
import Urls from '@/config.js'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
   quotes_list: []
  },
  mutations: {
    setQuotes(state,quotes_list){
      state.quotes_list = quotes_list
    }
  },
  actions: {
    loadData(state, url) {
      axios.get((url === 'pendingQuotes') ? Urls.pendingQuotesUrl : Urls.soldQuotesUrl).then((response) => {
        state.commit('setQuotes',response.data)
      })
      
    }
  },
  modules: {
  },
  getters: {
    getQuotes(state){
      return state.quotes_list
    }
  }
})
