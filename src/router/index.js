import Vue from 'vue'
import Router from 'vue-router'

import home from '../views/home/Home'
import applyService from '../views/applyService/ApplyService'
import order from '../views/order/Order'
import onlineStore from '../views/onlineStore/OnlineStore'
import myService from '../views/myService/MyService'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/applyService',
      component: applyService
    },
    {
      path: '/order',
      component: order
    },
    {
      path: '/toSelectOnlineStore',
      component: onlineStore
    },
    {
      path: '/myService',
      component: myService
    }
  ]
})
