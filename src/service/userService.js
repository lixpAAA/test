import urlConfig from './urlConfig'
import Vue from 'vue'
export default {
  // GET请求
  getUser () {
    return Vue.http.get(urlConfig.user.login)
  },
  getUser (id) {
    return Vue.http.get(urlConfig.user.login + '/' + id)
  },
  getUser (id) {
    return Vue.http.get(urlConfig.user.login + '?id=' + id)
  },
  getUser (id) {
    return Vue.http.get(urlConfig.user.login, {params: {id: id}})
  },
  // POST请求
  getUser (id) {
    return Vue.http.post(urlConfig.user.login, {id: id})
  },
  // DELETE请求（与get类似）
  getUser (id) {
    return Vue.http.delete(urlConfig.user.login, {params: {id: id}})
  },
  // PUT请求 （与post类似）
  getUser (id) {
    return Vue.http.put(urlConfig.user.login, {id: id})
  },
  getUser (id) {
    return Vue.http.get(urlConfig.user.login, {params: {id: id}})
  }
}