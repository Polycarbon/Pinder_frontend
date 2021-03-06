// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'semantic-ui-css'
import Vue from 'vue'
import SuiVue from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.min.css'
import App from './App'
import router from './router'
import store from './store'
import Axios from 'axios'

Vue.prototype.$http = Axios;

const token = localStorage.getItem('user-token')
localStorage.removeItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}
Vue.config.productionTip = false
Vue.use(SuiVue)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
