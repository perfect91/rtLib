import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入组件库
import XrUI from './../packages'
import Iview from 'iview'
import '../node_modules/iview/dist/styles/iview.css'
// 注册组件库
Vue.use(XrUI)
Vue.use(Iview)
// XrUI.install(Vue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
