<template>
  <article>
    <h1>{{ title }} {{ $route.params.id }}</h1>
    <h4>{{ time }}</h4>
    <p>{{ content }}</p>
  </article>
</template>

<script>
export default {
  name: 'blog',
  data () {
    return {
      title: 'Welcome to Your Vue.js App. ID=',
      time: '16:00, Feb 14th, 2017',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  }
}
</script>

<style scoped>
article {
  max-width: 900px;
  margin: 0 auto;
  padding: 50px;
}
</style>
