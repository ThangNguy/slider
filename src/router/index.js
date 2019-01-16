import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Slider from '@/components/Slider'
import Categories from '@/components/Categories'
import CategoryDetail from '@/components/CategoryDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/slider',
      name: 'Slider',
      component: Slider
    },
    {
      path: '/cat',
      name: 'Categories',
      component: Categories,
    },
    {
      path: '/cat/:name',
      name: 'CategoryDetail',
      component: CategoryDetail
    }
  ]
})
