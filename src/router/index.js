import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Categories from '@/views/challenges/Categories.vue'
import Challenges from '@/views/challenges/Challenges.vue'
import DashboardLayout from '@/views/dashboard/Layout.vue'

//忽略重复点击路由报错
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'Home' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
    meta: { title: 'About' }
  },
  {
    path: '/category',
    name: 'categories',
    component: Categories,
    meta: { title: 'Category' }
  },
  {
    path: '/category/:type',
    name: 'category',
    component: Challenges,
    meta: { title: 'Category' },
    children: [
      {
        name: 'challenge',
        path: 'challenge/:id',
        component: () => import('@/views/challenges/Challenge.vue'),
        meta: { title: 'Challenge' }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: { title: 'Login' }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue'),
    meta: { title: 'Register' }
  },
  {
    path: '/forget_password',
    name: 'Forget Password',
    component: () => import('@/views/ForgetPassword.vue'),
    meta: { title: 'Forget Password' }
  },
  {
    path: '/activate/:user_id/:token',
    name: 'activate',
    component: () => import('@/views/ActivateEmail.vue'),
    meta: { title: 'Activate Email' }
  },
  {
    path: '/reset_password/:user_id/:token',
    name: 'reset_password',
    component: () => import('@/views/ResetPassword.vue'),
    meta: { title: 'Reset Password' }
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: () => import('@/views/Notifications.vue'),
    meta: { title: 'Notifications' }
  },
  {
    path: '/scoreboard',
    name: 'Scoreboard',
    component: () => import('@/views/Scoreboard.vue'),
    meta: { title: 'Scoreboard' }
  },
  {
    path: '/dashboard',
    component: DashboardLayout,
    redirect: '/dashboard/profile',
    alwaysShow: true,
    name: 'dashboard',
    meta: {
      title: 'Dashboard'
    },
    children: [
      {
        path: 'profile',
        component: () => import('@/views/dashboard/Profile.vue'),
        name: 'profile',
        meta: {
          title: 'Profile'
        }
      },
      {
        path: 'team',
        component: () => import('@/views/dashboard/Team.vue'),
        name: 'team',
        meta: {
          title: 'Team'
        }
      }
    ]
  },
  {
    path: '/error/404',
    name: '404 NOT FOUND',
    component: () => import('@/views/error/Error404.vue'),
    meta: { title: '404' }
  },
  {
    path: '*',
    redirect: '/error/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
