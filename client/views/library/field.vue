
<script>
  import Field from '@app/field'
  import Box from './box'
  import Icon from './icon'

  export default {
    components: {
      Box,
      Icon
    },

    props: {
      field: {
        type: Field,
        require: true
      }
    },

    data() {
      return {
        types: {
          content: 'yellow',
          meta: 'red',
          reference: 'blue',
          action: 'green',
        }
      }
    },

    computed: {
      active() {
        return this.$route.query.field == this.field.id
      }
    },

    watch: {
      '$route.query.reference'(reference) {
        if (this.active) {
          this.field.attributes.reference_id = reference
          this.$router.push({ query: {} })
        }
      }
    },

    methods: {
      change(type) {
        this.field.type = type
        this.field.reference_id = null
      }
    }
  }
</script>

<template lang="pug">
  div(v-bind:class="$style.module")
    box(
      v-model="field.attributes.label"
      v-bind:class="[$style.box, active && $style.active]"
      v-bind:color="types[field.type]")

    div(v-bind:class="$style.types")
      div(
        v-for="(color, type) in types"
        v-bind:class="$style.type"
        v-bind:style="'background:' + color"
        v-on:click="change(type)")

    router-link(
      v-if="field.type === 'reference'"
      v-bind:class="[$style.reference, !!this.field.reference() && $style.referenced]",
      v-bind:to="{ query: { field: field.id } }")

    icon(
      v-bind:class="$style.delete"
      v-on:click.native="field.destroy"
      name="times")

    //- div(
      v-text="field.id"
      v-bind:class="$style.id")
</template>

<style lang="sass" module>
  .module
    position: relative

  .module:hover
    .types
      display: flex
    .delete
      display: block

  .types
    top: 5px
    left: 5px
    display: none
    position: absolute

  .type
    width: 10px
    height: 10px
    cursor: pointer
    border: 1px solid rgba(black, 0.2)

  .type + .type
    margin-left: 5px

  .reference
    bottom: 5px
    right: 5px
    cursor: pointer
    position: absolute
    width: 10px
    height: 10px
    border: 1px solid white
    border-radius: 50%

  .referenced
    background: white

  .active
    box-shadow: 4px 4px 4px rgba(black, .5)

  .delete
    top: 5px
    right: 5px
    color: white
    cursor: pointer
    display: none
    position: absolute

  .id
    left: 5px
    bottom: 5px
    position: absolute
</style>
