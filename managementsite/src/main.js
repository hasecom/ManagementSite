import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

import Common from './css/common.css'
Vue.use(Common)


Vue.config.productionTip = false

new Vue({
  el:"#app",
  router,
  render:h=>h(App)
}).$mount("#app")



