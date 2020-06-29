import Vue from 'vue'
import Router from 'vue-router'
import Captcha from '@/views/captcha'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Captcha
    }
  ]
})
