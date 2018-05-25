import Vue from 'vue'
import Router from 'vue-router'
import Designer from '@/components/Designer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: Designer,
      component: Designer
    }
  ]
})
