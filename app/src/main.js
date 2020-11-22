import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import './registerServiceWorker'

const base = axios.create({
    baseURL: 'http://192.168.178.23:3000/'
});
Vue.config.productionTip = false

Vue.prototype.$http = base;
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
