<template>
	<div id="app">
		<Text>sdfsdf</Text>
		<Auth />
	</div>
</template>

<script>
	import HelloWorld from './components/HelloWorld.vue'
  import Auth from './components/Auth.vue'
  import Text from './components/atoms/Text.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Auth,
    Text,
  }
}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>