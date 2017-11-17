import Vue from 'vue'
import App from './App'
import routes from './routes'
import Router from 'vue-router'

Vue.use(Router)

export default new Vue({
  components: { App },
  el: '#app',
  router: new Router({ routes, mode: 'history' }),
  template: '<App />'
})
