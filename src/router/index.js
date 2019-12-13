import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/pendingQuotes',
    name: 'pendingQuotes',
    component: () => import(/* webpackChunkName: "pendingQuotes" */ '@/views/PendingQuotes.vue')
  },
  {
    path: '/soldQuotes',
    name: 'soldQuotes',
    component: () => import('@/views/SoldQuotes.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
