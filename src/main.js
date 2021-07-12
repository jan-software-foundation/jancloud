import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Login from './Login.vue'
import Signup from './Signup.vue'
import Profile from './Profile.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  router: new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/login',
        component: Login
      },
      {
        path: '/sign-up',
        component: Signup
      },
      {
        path: '/profile/:username',
        component: Profile
      }
    ]
  }),
  data: {
    instanceName: "JanCloud",
  },
  render: h => h(App),
}).$mount('#app')
