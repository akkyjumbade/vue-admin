<template>
	<form @submit.prevent="onSubmit">
		<slot :values="values" :values="props"></slot>
		{{values}}
	</form>
</template>

<script>
	import { reactive } from 'vue'
  const values = reactive({
    status: 'draft',
  })
	export default {
    data() {
      return {
        values
      }
    },
    methods: {
      async onSubmit(ev) {
        const btnEl = ev.submitter
        btnEl.setAttribute('disabled', 'disabled')
      }
    },
    computed: {
      props() {
        return {

        }
      }
    }
  }
</script>

<style scoped vars="{}">
	span {
		font-size: 1rem;
	}
</style>