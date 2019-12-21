import Vue from 'vue'
import Vuex from 'vuex'
import Urls from '@/config.js'
import quoteServices from '@/services/QuoteService'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
   quotes_list: [],
   quote_type: '',
   show_content: false

  },
  mutations: {
    setQuotes(state,quotes_list){
      state.quotes_list = quotes_list
    },
    setType(state,quote_type){
      state.quote_type = quote_type
    },
    setShow(state){
      state.show_content = true
    }
  },
  actions: {
    requestData(state,url) {
      quoteServices.getRequest((url === 'pendingQuotes' ? Urls.pendingQuotesUrl : Urls.soldQuotesUrl))
            .then(response => {
              state.commit('setQuotes',response.data)
            })
            .catch(error => {
              alert(error);
            })
    },
    setType(state,type) {
      state.commit('setType',(type === 'pendingQuotes' ? 'Pending Quotes' : 'Sold Quotes'))
    },
    setShow(state){
      state.commit('setShow')
    }

  },
  getters: {
    getQuotes(state){
      return state.quotes_list
    },
    getType(state){
      return state.quote_type
    },
    getShow(state){
      return state.show_content
    }
  }
})
