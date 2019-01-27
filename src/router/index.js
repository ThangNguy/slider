import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Slider from '@/components/Slider'
import Categories from '@/components/Categories'
import CategoryDetail from '@/components/CategoryDetail'
import User from '@/components/User'
import Register from '@/components/Register'
import Login from '@/components/Login'
import CategoryAnimal from '@/components/CategoryAnimal'
import ListUser from '@/components/ListUser'
import Partner from '@/components/Partner'
import Tournaments from '@/components/Tournaments'
import FilterTournament from '@/components/FilterTournament'
import TournamentFilter from '@/components/TournamentFilter'
import TournamentDetail from '@/components/TournamentDetail'


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
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/categoryanimal',
      name: 'CategoryAnimal',
      component: CategoryAnimal
    },
    {
      path: '/listuser',
      name: 'ListUser',
      component: ListUser
    },
    {
      path: '/partner',
      name: 'Partner',
      component: Partner
    },
    {
      path: '/tournaments',
      name: 'Tournaments',
      component: Tournaments
    },
    {
      path: '/filter',
      name: 'FilterTournament',
      component: FilterTournament
    },
    {
      path: '/filtertour',
      name: 'TournamentFilter',
      component: TournamentFilter
    },
    {
      path: '/tournaments/details/:tournamentID',
      name: 'TournamentDetail',
      component: TournamentDetail
    }
  ]
})
