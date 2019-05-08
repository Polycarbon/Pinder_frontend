import Vue from 'vue'
import Router from 'vue-router'
import Matches from '@/components/Matches'
import Profile from '@/components/Profile'
import Profileuser from '@/components/Profileuser'
import Favorite from '@/components/Favorite'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'

Vue.use(Router)
let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/signin'
    },
    {
      path: '*',
      redirect: '/signin'
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/matches',
      name: 'matches',
      component: Matches,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: Favorite,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profileuser/:userId',
      name: 'profileuser',
      component: Profileuser,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

export default router
