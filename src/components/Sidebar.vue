<template>
  <nav>
    <ul>
			<router-link tag="li" v-for="article in articles" :to="'/blog/' + article.id"><a>{{ article.title }}</a></router-link>
    </ul>
		<footer>
			<router-link to="/me" class="hi">Hi</router-link>
			<p class="text-right">Designed By Max</p>
		</footer>
  </nav>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
			articles: [
				{title: 'Arcticle A', id: 101},
				{title: 'Arcticle B', id: 102},
				{title: 'Arcticle C', id: 103},
				{title: 'Arcticle D', id: 104},
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
	li a {
		color: #333333;		
		text-decoration: none;
	}
	li:hover, li.router-link-active {
		background-color: #b5d1bb;
	}
	.hi {
		position: absolute;
		left: 0;
    width: 30px;
		font-weight: bold;
		background-color: #a8baca;
		line-height: 30px;
		border-radius: 50%;
		transition: all 0.3s ease;
		text-decoration: none;
		font-size: 13px;
	}
	.hi:hover{
		border-radius: 0;
		background-color: transparent;
	}
	footer {
		position: absolute;
		box-sizing: border-box;
		padding-left: 30px;
		bottom: 0;
		width: 280px;
		font-size: 10px;
		background-color: rgba(240,255,255, 0.9);
	}
	footer p {
		padding: 8px;
		margin: 0;
		text-transform: uppercase; 
	}
</style>
