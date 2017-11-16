import Vue from 'vue'
import App from '@/App'
import Router from 'vue-router'
import routes from '@/router/routes'

Vue.use(Router)

export default new Vue({
  components: { App },
  el: '#app',
  router: new Router({ routes, mode: 'history' }),
  template: '<App />'
})
