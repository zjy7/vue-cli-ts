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
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About/index.vue')
  },
  {
    path: '/talk',
    name: 'talk',
    component: () => import(/* webpackChunkName: "about" */ '../views/Talk/index.vue')
  },
  {
    path: '/popWindow',
    name: 'popWindow',
    component: () => import(/* webpackChunkName: "about" */ '../views/PopWindow/index.vue')
  },
  {
    path: '/cesiumDemo',
    name: 'cesiumDemo',
    component: () => import(/* webpackChunkName: "about" */ '../views/CesiumDemo/index.vue')
  },
  {
    path: '/cesiumDemoOne',
    name: 'cesiumDemoOne',
    component: () => import(/* webpackChunkName: "about" */ '../views/CesiumDemoOne/index.vue')
  },
  {
    path: '/keepalive',
    name:'keepalive',
    component:()=>import('../views/keepalive/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
