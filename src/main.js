import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// Haz que BootstrapVue esté disponible en todo tu proyecto
Vue.use(BootstrapVue);


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
