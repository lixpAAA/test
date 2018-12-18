import Vue from 'vue'
import App from './App'
import { AjaxPlugin, ToastPlugin, DatetimePlugin } from 'vux'
import { router } from './router/index'
import FastClick from 'fastclick'
import store from './vuex'
import ECharts from 'vue-echarts'
import 'echarts'
// import VMapPlugin, { CssLoader } from 'vue-esri'
// 空气模块
import AqiModule from './components/module-aqi'

Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.use(AjaxPlugin)
Vue.use(ToastPlugin)
Vue.use(DatetimePlugin)
Vue.component('echarts', ECharts)
// Vue.use(VMapPlugin, {
//   url: '/arcgisapi/4.7/dojo/dojo.js',
//   css: '/arcgisapi/4.7/esri/css/main.css',
//   dojoConfig: {
//     baseUrl: '/arcgisapi/4.7/dojo'
//   }
// })
// CssLoader.loadCss('/arcgisapi/4.7/esri/css/main.css')
// 注册空气模块功能
Vue.use(AqiModule, { router, store })

Vue.filter('dateTohhss', function (value) {
  let date = new Date(value)
  let h = date.getHours()
  if (h < 10) {
    return '0' + h + ':00'
  } else {
    return h + ':00'
  }
})
/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
