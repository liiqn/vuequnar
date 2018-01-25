import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import City from '@/pages/city'
import Detail from '@/pages/detail/'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:sightId',
    name: 'detail',
    component: Detail,
    props: true
  }]
})
