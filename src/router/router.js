import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex'

Vue.use(Router)
const router = new Router({
  base: CONTEXT_PATH,
  mode: 'history',
  routes: [{
    name: 'index',
    path: '/',
    component: () => import('@/components/index')
  }]
})
// router.beforeEach((from, to, next) => {
//   store.commit('updateLoadingStatus', { isLoading: true })
//   next()
// })
// router.afterEach(function (to) {
//   store.commit('updateLoadingStatus', { isLoading: false })
// })
export default router
