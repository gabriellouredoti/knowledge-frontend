import Vue from 'vue'
import 'font-awesome/css/font-awesome.css' 

import App from './App'

import store from './config/store' 
import router from './config/router'

import './config/bootstrap'
import './config/msgs'

Vue.config.productionTip = false

// Gambiarra temporária

require('axios').defaults.headers.common['Authorization'] = `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkdhYnJpZWwgRiBMb3VyZWRvIiwiZW1haWwiOiJnYWJyaWVsQGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2NDA5MjY0MTEsImV4cCI6MTY0MTE4NTYxMX0.yutwcrWrDrQn0mdXB7bhf8L-gF-IBTNK3QWy1Q0uKNM`

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')