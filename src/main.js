// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueSimplemde from 'vue-simplemde'

import App from './App'
import Blog from './components/Blog'
import Sidebar from './components/Sidebar'
import Profile from './components/Profile'
import Post from './components/Post'

Vue.use(VueRouter) //You don't need to do this when using global script tags.
Vue.use(VueSimplemde)

const routes = [
  { path: '/', component: Profile },
  { path: '/blog/:id', component: Blog },
  { path: '/me', component: Profile },
  { path: '/popopo', component: Post }
]

const router = new VueRouter({
  routes // short for routes: routes
})

new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
}).$mount('#app')