import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import store from '../store'

Vue.use(VueRouter)
/*const ifAuthenticated = (to, from, next) => {
  if(store.getters.getAuthenticated){
    console.log(store.getters.getAuthenticated)
  //if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}*/

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/pendingQuotes',
    name: 'pendingQuotes',
    //beforeEnter: ifAuthenticated,
    component: () => import('@/views/QuotesView.vue')
  },
  {
    path: '/soldQuotes',
    name: 'soldQuotes',
    //beforeEnter: ifAuthenticated,
    component: () => import('@/views/QuotesView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
