<template>
	<div>
		<slot name="prepend"></slot>
		<button v-bind="$attrs" class="Button">
      <span></span>
      <span v-text="label"></span>
      <span></span>
    </button>
		<slot name="append"></slot>
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