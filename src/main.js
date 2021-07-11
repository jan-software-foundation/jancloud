import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Login from './Login.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  router: new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/login',
        component: Login
      }
    ]
  }),
  render: h => h(App),
}).$mount('#app')
