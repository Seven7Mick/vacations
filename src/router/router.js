import Vue from 'vue'
import Router from 'vue-router'
import VacationsWorkers from '@/components/VacationsWorkers'
import GlobalCalendar from '@/components/GlobalCalendar'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'globalCalendar',
      component: GlobalCalendar
    },    
    {
      path: '/vacations',
      name: 'vacationsWorkers',
      component: VacationsWorkers
    },
  ]
})