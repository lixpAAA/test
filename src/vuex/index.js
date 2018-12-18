import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    lastupdate: new Date().getTime()
  },
  mutations: {
    updateTooltipLastChange (state, payload) {
      state.lastupdate = payload.lastupdate
    }
  }
})
