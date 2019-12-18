import Vue from 'vue'
import Vuex from 'vuex'
import Urls from '@/config.js'
import quoteServices from '@/services/QuoteService'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
   quotes_list: [],
  
  },
  mutations: {
    setQuotes(state,quotes_list){
      state.quotes_list = quotes_list
    }
  },
  actions: {
    requestData(state, url) {
      quoteServices.getRequest((url === 'pendingQuotes' ? Urls.pendingQuotesUrl : Urls.soldQuotesUrl))
            .then(response => {
              state.commit('setQuotes',response.data)
                console.log(response)
            })
            .catch(error => {
                console.log(error) 
            })
    }
  },
  getters: {
    getQuotes(state){
      return state.quotes_list
    }
  }
})
