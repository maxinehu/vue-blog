<template>
	<section>
		<form>
			<input type="text" placeholder="Title">
			<markdown-editor v-model="content" ref="markdownEditor"></markdown-editor>
			<button>Submit</button>
		</form>
	</section>
</template>

<script>
	import { markdownEditor } from 'vue-simplemde'
	
	export default {
		name: 'post',
		components: {
			markdownEditor
		},
		data() {
			return {
				content: ''
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
input {
  display: block;
  font-size: 1.2em;
  padding: 0.25em;
  width: 100%;
  margin-bottom: 1em;
  border-radius: 3px;
  border: 1px solid #BABABA;
}
</style>