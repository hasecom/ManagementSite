import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/scene/Home.vue'
import Activity from '@/scene/Activity.vue'
import News from '@/scene/News.vue'
import Profile from '@/scene/Profile.vue'

Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes:[
    {
      path: '/',
      component: Home
    },
    {
      path: '/activity',
      component: Activity
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/profile',
      component: Profile
    }
  ]
})
