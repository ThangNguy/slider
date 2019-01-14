import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Slider from '@/components/Slider'
console.log(Slider)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/slider/slider',
      name: 'Page2',
      component: Slider
    }
  ]
})
