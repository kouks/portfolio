import Vue from 'vue'
import App from './App'
import axios from 'axios'
import routes from './routes'
import Router from 'vue-router'
import VueAxios from 'vue-axios'

// Requiring global helper functions.
require('./helpers')

// Requiring custom Vue Directives
require('./directives')

Vue.use(Router)
Vue.use(VueAxios, axios)

export default new Vue({
  components: { App },
  el: '#app',
  router: new Router({ routes, mode: 'history' }),
  template: '<App />'
})
