import Vue from 'vue'
import Router from 'vue-router'


const index = resolve => require(['@/page/index'], resolve);//首页
const deviceOrSet = resolve => require(['@/page/deviceOrSet'], resolve);//数据页
const gamePlayer = resolve => require(['@/page/gamePlayer'], resolve);//玩家列表页
const grameUserInfo = resolve => require(['@/page/grameUserInfo'], resolve);//玩家详情页
const assessPage = resolve => require(['@/page/assessPage'], resolve);//设备列表页
const assessPageInfo = resolve => require(['@/page/assessPageInfo'], resolve);//设备详情页
const answerPage = resolve => require(['@/page/answerPage'], resolve);//问答页
const my = resolve => require(['@/page/my'], resolve);//我的
const feedback = resolve => require(['@/page/feedback'], resolve);//反馈页
const productPageInfo = resolve => require(['@/page/productPageInfo'], resolve);//最佳设备详情页
const answerInfoPage = resolve => require(['@/page/answerInfoPage'], resolve);//问答详情页
const searchPage = resolve => require(['@/page/searchPage'], resolve);//搜索页
const privacyPage = resolve => require(['@/page/privacyPage'], resolve);//隐私页
const lawMessagePage = resolve => require(['@/page/lawMessagePage'], resolve);//法律声明
const wxLoginPage = resolve => require(['@/page/wxLoginPage'], resolve);//二维码接收页
const otherMessagePage = resolve => require(['@/page/otherMessagePage'], resolve);//暂无详情页


Vue.use(Router)

const router = new Router({
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
    },
    {
      path: '/searchPage',
      name: 'searchPage',
      component: searchPage
    },
    {
      path:'/privacyPage',
      name: 'privacyPage',
      component: privacyPage
    },
    {
      path: '/lawMessagePage',
      name: 'lawMessagePage',
      component: lawMessagePage
    },
    {
      path: '/wxLoginPage',
      name: 'wxLoginPage',
      component: wxLoginPage
    },
    {
      path: '/otherMessagePage',
      name: 'otherMessagePage',
      component: otherMessagePage
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  next();
})

router.afterEach((to, from, next) => { document.querySelector("body").setAttribute("style", "overflow: auto !important;") });

export default router
