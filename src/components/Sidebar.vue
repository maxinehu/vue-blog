<template>
  <nav>
    <ul>
			<li v-for="title in titles"><a>{{title}}</a></li>
    </ul>
		<footer>Designed By Max</footer>
  </nav>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
			titles: [
				'Welcome to Your Vue.js App 1',
				'Welcome to Your Vue.js App 2',
				'Welcome to Your Vue.js App 3',
				'Welcome to Your Vue.js App Your Vue.js App 44',
			]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	nav {
		position: absolute;
		width: 30px;
		height: 100vh;
		overflow-x: hidden;
		background-color: #a3c6aa;
		transition: all 0.3s ease;
		box-shadow: 1px 0 10px #b6b6a1;
		box-sizing: border-box;
	}
	nav:hover {
		width: 280px;
	}
	ul {
		width: 250px;
		height: 100vh;
		overflow-y: scroll;
		margin: 0 0 0 30px;
		padding: 0 0 40px 0;
		box-sizing: border-box;
		list-style-type: none;
		background-color: #92b299;
	}
	li {
		padding: 20px;
		font-size: 14px;
		cursor: default;
		transition: all 0.3s ease;
	}
	li:hover {
		background-color: #b5d1bb;
	}
	footer {
		position: absolute;
		box-sizing: border-box;
		padding: 10px;
		bottom: 0;
		width: 280px;
		font-size: 10px;
		text-transform: uppercase; 
		text-align: right;
		background-color: rgba(240,255,255, 0.9);
	}
</style>
