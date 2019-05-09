import Vue from 'vue'
import Router from 'vue-router'
import Matches from '@/components/Matches'
import Profile from '@/components/Profile'
import Profilepet from '@/components/Profilepet'
import Favorite from '@/components/Favorite'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import Profileuser from '@/components/Profileuser'
import Editprofile from '@/components/Editprofile'
import Setting from '@/components/Setting'

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
      name: 'Profileuser',
      component: Profileuser,
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
      path: '/profilepet/:userId',
      name: 'profilepet',
      component: Profilepet,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit',
      name: 'Editprofile',
      component: Editprofile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

export default router
