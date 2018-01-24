
<script>
export default {
  created() {
    this.theme.use(this.$style)
  }
}
</script>

<template lang="pug">
  div(v-if="false")
</template>

<style lang="sass">
  @import '~normalize.css/normalize.css'
</style>

<style lang="sass" module>
  .background
    background: red

  .h1
    font-size: 10px
    font-weight: bold
</style>
