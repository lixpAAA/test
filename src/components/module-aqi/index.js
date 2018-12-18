import routes from './router'
import storeModule from './vuex'

export default {
  name: 'aqi',
  install (Vue, { router, store }) {
    router.addRoutes(routes)
    store.registerModule('aqi', storeModule)
  }
}
