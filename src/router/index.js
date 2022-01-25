import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Pomodoro'
      // keepAlive: true
    }
  },
  {
    path: '/analyze',
    name: 'Analyze',
    component: () => import(/* webpackChunkName: "analyze" */ '../views/Analyze.vue'),
    meta: {
      title: 'Pomodoro | Analyze'
    }
  },
  {
    path: '/sound',
    name: 'Sound',
    component: () => import(/* webpackChunkName: "sound" */ '../views/Sound.vue'),
    meta: {
      title: 'Pomodoro | Sound'
    }
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue'),
    meta: {
      title: 'Pomodoro | 404'
    }
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes
})

router.afterEach((to) => {
  document.title = to.meta.title
})

export default router
