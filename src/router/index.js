import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import deviceOrSet from '@/page/deviceOrSet'
import gamePlayer from '@/page/gamePlayer'
import grameUserInfo from '@/page/grameUserInfo'
import assessPage from '@/page/assessPage'
import assessPageInfo from '@/page/assessPageInfo'
import answerPage from '@/page/answerPage'
import my from '@/page/my'
import feedback from '@/page/feedback'
import productPageInfo from '@/page/productPageInfo'
import answerInfoPage from '@/page/answerInfoPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/deviceOrSet',
      name: 'deviceOrSet',
      component: deviceOrSet
    },
    {
      path: '/gamePlayer',
      name: 'gamePlayer',
      component: gamePlayer
    },
    {
      path: '/grameUserInfo',
      name: 'grameUserInfo',
      component: grameUserInfo
    },
    {
      path: '/assessPage',
      name: 'assessPage',
      component: assessPage
    },
    {
      path: '/assessPageInfo',
      name: 'assessPageInfo',
      component: assessPageInfo
    },
    {
      path: '/answerPage',
      name: 'answerPage',
      component: answerPage
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: feedback
    },
    {
      path: '/productPageInfo',
      name: 'productPageInfo',
      component: productPageInfo
    },
    {
      path: '/answerInfoPage',
      name: 'answerInfoPage',
      component: answerInfoPage
    }
  ]
})
