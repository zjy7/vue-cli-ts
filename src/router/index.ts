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
  },
  {
    path: '/keepalive2',
    name:'keepalive2',
    component:()=>import('../views/keepalive2/index.vue'),
    redirect:'/keepalive2/shouye',
    children:[
      {
        name:'shouye',
        path:'shouye',
        component:()=>import('../views/keepalive2/shouye.vue')
      },
      {
        name:'cp0',
        path:'cp0',
        component:()=>import('../views/keepalive2/component0.vue')
      },
      {
        name:'cp1',
        path:'cp1',
        component:()=>import('../views/keepalive2/component1.vue')
      },
      {
        name:'cp2',
        path:'cp2',
        component:()=>import('../views/keepalive2/component2.vue')
      },
    ]
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  debugger
  next()
})
export default router
