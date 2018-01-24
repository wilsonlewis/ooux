
<script>
  import Block from '@app/block'
  import Box from './box'
  import Icon from './icon'

  export default {
    name: 'block',

    components: {
      Box,
      Icon
    },

    props: {
      block: {
        type: Block,
        require: true
      }
    },

    computed: {
      query() {
        return Object.assign({
          reference: this.block.id
        }, this.$route.query)
      }
    }
  }
</script>

<template lang="pug">
  div(v-bind:class="$style.module")
    box(
      v-model="block.attributes.label"
      v-bind:class="$style.box"
      v-bind:color="'blue'")

    router-link(
      v-if="$route.query.field"
      v-bind:class="$style.active"
      v-bind:to="{ query }")

    icon(
      v-bind:class="$style.delete"
      v-on:click.native="block.destroy"
      name="times")
</template>

<style lang="sass" module>
  .module
    position: relative

  .module:hover
    .delete
      display: block

  .active
    top: 0
    left: 0
    right: 0
    bottom: 0
    cursor: pointer
    opacity: 0.6
    position: absolute
    background: white

  .active:hover
    opacity: 0.2

  .delete
    top: 5px
    right: 5px
    color: white
    cursor: pointer
    display: none
    position: absolute
</style>
