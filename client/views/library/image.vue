
<script>
export default {
  name: 'asset',

  props: {
    fields: {
      type: Object,
      required: true
    }
  }
}
</script>

<template lang="pug">
  img(v-bind:src="'https:' + fields.file.url")
</template>

<style lang="sass" module>
  .module
</style>
