import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Conocenos',
    
    component: () => import(/* webpackChunkName: "about" */ '../components/Conocenos.vue')
  },
  {
    path: '/Contactenos',
    component: () => import(/* webpackChunkName: "about" */ '../components/Contactenos.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
