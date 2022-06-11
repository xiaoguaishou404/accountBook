import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: "./money"
  },
  {
    path: '/money',
    name: 'Money',
    component: () => import(/* webpackChunkName: "money" */ '../views/Money.vue')

  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: () => import(/* webpackChunkName: "statistics" */ '../views/Statistics.vue')
  },
  {
    path: '/home',
    name: 'Home',
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => {
      
      import(/* webpackChunkName: "notFound" */ '../views/NotFound.vue')
    }
  },


]

const router = new VueRouter({
  routes
})

export default router
