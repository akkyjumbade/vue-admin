<template>
	<Form #default="{ values, props }">
		<TextInput type="" v-model="values.username" />
		<Button label="Login" />
	</Form>
</template>

<script>
	import Form from './organisms/Form'
  import TextInput from './atoms/TextInput'
  import Button from './atoms/Button'
	export default {
    components: {
      Form,
      Button,
      TextInput
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped vars="{}">
	span {
		font-size: 1rem;
	}
</style>