import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'


import Common from './css/common.css'
Vue.use(Common)


Vue.config.productionTip = false

new Vue({
  el:"#app",
  router,
  render:h=>h(App)
}).$mount("#app")



