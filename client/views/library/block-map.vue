
<script>
  import Context from '@app/context'
  import Box from './box'
  import Block from './block'
  import Field from './field'
  import upperFirst from 'lodash/upperFirst'

  export default {
    components: {
      Box,
      Block,
      Field
    },

    props: {
      context: {
        type: Context,
        required: true
      }
    },

    methods: {
      createBlock() {
        this.context.blocks.create({
          label: 'Object'
        })
      },

      createField(block, type) {
        block.fields.create({
          label: upperFirst(type),
          type: type
        })
      }
    }
  }
</script>

<template lang="pug">
  div(v-bind:class="$style.module")
    div(v-bind:class="$style.layer")
      div(
        v-for="block in context.blocks()"
        v-bind:class="$style.block"
        v-bind:key="block.id")

        div(
          v-bind:class="[$style.gain, $style.field]"
          v-on:click="createField(block, 'action')")
          
        field(
          v-for="field in block.actions"
          v-bind:class="$style.field"
          v-bind:field="field"
          v-bind:key="field.id")

    div(v-bind:class="$style.layer")
      div(v-bind:class="$style.square")

      block(
        v-for="block in context.blocks()"
        v-bind:class="$style.block"
        v-bind:block="block"
        v-bind:key="block.id")

      div(
        v-bind:class="$style.add"
        v-on:click="createBlock")

    div(v-bind:class="$style.layer")
      div(
        v-for="block in context.blocks()"
        v-bind:class="$style.block"
        v-bind:key="block.id")

        field(
          v-for="field in block.properties"
          v-bind:class="$style.field"
          v-bind:field="field"
          v-bind:key="field.id")
          
        div(
          v-bind:class="[$style.gain, $style.field]"
          v-on:click="createField(block, 'content')")
</template>

<style lang="sass" module>
  .module
    width: 100vw
    height: 100vh
    overflow: scroll
  .block
    // display: inline-flex
    // flex-direction: column
    // justify-content: flex-start

  .block + .block
    margin-left: 10px

  .layer
    justify-content: center
    display: flex
    position: relative

  .layer:first-child
    align-items: flex-end

  .layer + .layer
    margin-top: 10px

  .field + .field
    margin-top: 10px

  .add
    margin-left: 10px
    // left: calc(100% + 10px)
    // position: absolute

  .square
    width: 100px
    height: 100px
    margin-right: 10px

  .add,
  .gain
    width: 100px
    height: 100px
    cursor: pointer
    &:hover
      background: grey
</style>
