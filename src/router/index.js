import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home'
import CloudClassroom from '../views/CloudClassroom'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/cloudclassroom',
      component: CloudClassroom
    }
  ]
})

export default router
