<template>
	<div>
		<slot name="header"></slot>
		<slot name="footer"></slot>
	</div>
</template>

<script>
	export default {
    props: {
      label: String,
      length: String,
      max: [String, Number],
      min: [String, Number],
      caption: String,
      placeholder: String,
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped vars="{}">
	.Button {
		font-size: 1rem;
		height: 34px;
		display: flex;
		align-items: center;
		box-sizing: border-box;
	}
</style>