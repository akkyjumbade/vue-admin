<template>
	<div>
		<slot name="header"></slot>
		<input v-bind="$attrs" class="TextInput" />
		<slot name="footer"></slot>
	</div>
</template>

<script>
	export default {
    data() {
      return {

      }
    }
  }
</script>

<style scoped vars="{}">
	.TextInput {
		font-size: 1rem;
		height: 34px;
		box-sizing: border-box;
		padding: .4rem 1rem;
	}
</style>