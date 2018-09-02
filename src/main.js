// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import store from './store/common'
import VueLazyLoad from 'vue-lazyload'
import 'element-ui/lib/theme-chalk/index.css'
import http from './components/common/http'
Vue.use(Element)
Vue.config.productionTip = false
Vue.use(VueLazyLoad, {
  error: './static/404.png',
  loading: './static/loading.gif'
})
Vue.prototype.$http = http
Vue.prototype.$uploadUrl = http.defaults.baseURL + '/uploader/guanjiaxiangqing/img'
// 执行成功的消息提示（不能使用箭头函数）
Vue.prototype.$success = function (message) {
  if (message === undefined) { message = 'success' }
  this.$message({
    message: message,
    type: 'success'
  })
}
// 警告的消息提示（不能使用箭头函数）
Vue.prototype.$warning = function (message) {
  this.$message({
    message: message,
    type: 'warning'
  })
}
// 出错的消息提示（不能使用箭头函数）
Vue.prototype.$error = function (message) {
  this.$message({
    message: message,
    type: 'error'
  })
}

// 绑定user
Vue.prototype.$user = null

// 全屏显示
Vue.prototype.$screenHeight = function () {
  return (document.documentElement.clientHeight || document.body.clientHeight) + 'px'
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
