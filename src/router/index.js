import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index'
import list from '../views/list'
import topic from '../views/topic'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/list',
      name:'list',
      component: list
    },
    {
      path:'/topic',
      name:'topic',
      component: topic
    },
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
