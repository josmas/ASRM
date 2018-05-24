import Vue from 'vue'
import Router from 'vue-router'
import DeviceView from '@/components/DeviceView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DeviceView',
      component: DeviceView
    }
  ]
})
