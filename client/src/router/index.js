import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Signup from '@/components/signup'
import Test from '@/components/test'
Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/admin',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/',
      name: 'Test',
      component: Test,
    
    }
  ],
  mode:"history",
  
})
router.beforeEach(function (to, from, next) {
  
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('token');
  
    
    
    if (token !== null){
      next()
    } else {
      next({name:'Login'})
    }
  }
  next()
})
export default router