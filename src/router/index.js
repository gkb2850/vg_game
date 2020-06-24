import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import deviceOrSet from '@/page/deviceOrSet'
import gamePlayer from '@/page/gamePlayer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'gamePlayer',
      component: gamePlayer
    }
  ]
})
