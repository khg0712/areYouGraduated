import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Login from '@/components/login'
import Work from '@/components/workMain'
import Timeline from '@/components/timelineMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: Timeline
    }
  ]
})
