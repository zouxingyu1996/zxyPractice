import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index/index'
import Search from 'components/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
