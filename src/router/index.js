import Vue from 'vue'
import Router from 'vue-router'
import list from '../views/list'
import topic from '../views/topic'
import login from '../views/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'list',
      component: list
    },
    {
      path:'/list',
      name:'list',
      component: list
    },
    {
      path:'/topic/:id',
      name:'topic',
      component: topic
    },
    {
      path:'/login',
      name:'login',
      component:login
    }
  ]
})
