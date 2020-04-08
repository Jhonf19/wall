import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

  const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Home',
    component: Login,
    meta: {
      noAuth: true  
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
    meta: {
      isAuth: true  
    }
  },
  {
    path: '/customers',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      isAuth: true  
    }
  },
  {
    path: '/products',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      isAuth: true  
    }
  },
  {
    path: '/creditos',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      isAuth: true  
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser  
    if (to.matched.some( record => record.meta.isAuth )){
    if (user) {
      next()
    }else {
      next('/')
    }
  }if (to.matched.some( record => record.meta.noAuth )){
    if (user) {
      next('/dashboard')
    }else {
      // next('/')
      next()
    }
  }
})
console.log('index');

export default router
