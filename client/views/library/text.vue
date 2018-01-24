
<script>
export default {
  props: {
    level: {
      type: Number,
      default: 1
    }
  }
}
</script>

<template lang="pug">
component(
  v-bind:is="'h' + level",
  v-bind:class="[$style.module, $style['h' + level]]")
</template>

<style lang="sass" module>
.module
  margin: 0
  padding: 0
  font-weight: 100
   
.h1
    
</style>
