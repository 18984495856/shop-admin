import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Swipe from '@/page/Swipe'
import Index from '@/page/Index'
import Login from '@/page/Login'
import GoodsManager from '@/page/admin/GoodsManager'
import GoodsType from '@/page/admin/GoodsType'
import GoodsPush from '@/page/admin/GoodsPush'
import GoodsEdit from '@/page/admin/GoodsEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/Index',
      children: [
        {
          path: '/Index',
          name: 'Index',
          component: Index
        },
        {
          path: '/Swipe',
          name: 'Swipe',
          component: Swipe
        },
        {
          path: '/GoodsManager',
          name: 'GoodsManager',
          component: GoodsManager
        },
        {
          path: '/GoodsType',
          name: 'GoodsType',
          component: GoodsType
        },
        {
          path: '/GoodsPush',
          name: 'GoodsPush',
          component: GoodsPush
        },
        {
          path: '/GoodsEdit/:goods_id',
          name: 'GoodsEdit',
          component: GoodsEdit
        }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
