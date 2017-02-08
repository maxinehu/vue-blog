<template>
	<div>
		<section>
			<h1>About me</h1>
			<p>{{ description }}</p>
		</section>
		<section>
			<h1>Contact me</h1>
		</section>
	</div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  }
}
</script>

<style scoped>
section {
  max-width: 900px;
  margin: 0 auto;
  padding: 50px;
}
</style>