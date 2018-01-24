
<template lang="pug">
  router-link(
    v-if="$attrs.to",
    v-bind="$attrs",
    v-bind:class="$style.module")

    slot

  a(v-else
    v-bind:class="$style.module")
    
    slot
</template>

<style lang="sass" module>
  .module
    // height: 30px
    // width: 155px
    font-size: 2.5vh
    font-weight: 300
    line-height: 4vh
    text-align: center

  .module:after
    left: 2%
    width: 96%
    height: 1px
    content: ' '
    display: block
    background: white
    position: relative
    opacity: 0.15
</style>
