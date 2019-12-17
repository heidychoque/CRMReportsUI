import Vue from 'vue'
import Vuex from 'vuex'

import quoteServices from '@/services/QuoteService'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
   quotes_list: [],
   authenticated: false

  },
  mutations: {
    setQuotes(state,quotes_list){
      state.quotes_list = quotes_list
    },
    setAuthenticated(state,tokenResponse,tokenInLocal){
      if (tokenResponse == tokenInLocal){
        state.authenticated=true
      }
      else {
        state.authenticated=false
      }
    }
  },
  actions: {
    requestData(state, url) {
      quoteServices.getRequest(url)
            .then(response => {
              state.commit('setQuotes',response.data)
                console.log(response)
            })
            .catch(error => {
                console.log(error) 
            })

     /*axios.get((url === 'pendingQuotes') ? Urls.pendingQuotesUrl : Urls.soldQuotesUrl).then((response) => {
        state.commit('setQuotes',response.data)
      })*/
      
    },
    isAuthenticated(state, tokenResponse,tokenInLocal){
    state.commit('setAuthenticated', tokenResponse,tokenInLocal)
    }
    
  },
  modules: {
  },
  getters: {
    getQuotes(state){
      return state.quotes_list
    },
    //isAuthenticated: state => !!state.token
    getAuthenticated(state){
      //console.log(state.authenticated)
      return state.authenticated
    }
  }
})
