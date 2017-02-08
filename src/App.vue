<template>
  <div id="app">
    <sidebar></sidebar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Blog from './components/Blog'
import Sidebar from './components/Sidebar'
import VueRouter from 'vue-router'

export default {
  name: 'app',
  components: {
    Blog,
    Sidebar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.text-right {
  text-align: right;
}
</style>
