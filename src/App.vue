<template>
  <div id="app">
    <sidebar></sidebar>
    <div class="content">
      <blog></blog>
    </div>
  </div>
</template>

<script>
import Blog from './components/Blog'
import Sidebar from './components/Sidebar'

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
</style>
