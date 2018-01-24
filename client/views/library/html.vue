
<script>
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    VueMarkdown
  }
}
</script>

<template lang="pug">
vue-markdown(
  v-bind:class="$style.module",
  v-bind="$attrs")
</template>

<style lang="sass" module>
.module
</style>
