
<script>
  import autosize from 'autosize'

  export default {
    props: {
      value: {
        type: null
      },

      color: {
        type: String
      }
    },

    mounted() {
      autosize(this.$refs.input)
    },

    methods: {
      update(event) {
        this.$emit('input', event.target.value)
      }
    }
  }
</script>

<template lang="pug">
  div(v-bind:class="[$style.module, $style[color]]")

    textarea(
      ref="input"
      rows="1"
      v-bind:class="$style.input"
      v-bind:value="value"
      v-on:input="update")
</template>

<style lang="sass" module>
  .module
    width: 100px
    height: 100px
    display: flex
    position: relative
    align-items: center
    justify-content: center

  .input
    color: white
    width: 100%
    border: 0
    margin: 0
    padding: 0
    resize: none
    background: transparent
    text-align: center
    vertical-align: middle

  .input:focus
    outline: 0

  .red
    background: red

  .yellow
    background: yellow
    .input
      color: grey

  .blue
    background: blue

  .green
    background: green
</style>
