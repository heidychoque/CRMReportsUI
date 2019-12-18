import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/pendingQuotes'
  },
  {
    path: '/pendingQuotes',
    name: 'pendingQuotes',
    component: () => import('@/views/QuotesView.vue')
  },
  {
    path: '/soldQuotes',
    name: 'soldQuotes',
    component: () => import('@/views/QuotesView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
