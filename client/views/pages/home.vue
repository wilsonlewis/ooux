

<script>
import Context from '@app/context'
import Icon from '../library/icon'
import BlockMap from '../library/block-map'
import axios from 'axios'

export default {
  components: {
    Icon,
    BlockMap
  },

  data() {
    return {
      saving: false,
      error: null
    }
  },

  computed: {
    context() {
      return Context.query().first()
    }
  },

  created() {
    this.save = this.save.bind(this)

    this.timer = setInterval(this.save, 5000)
  },

  methods: {
    save() {
      this.saving = true

      axios.post('/data', this.connection.data)
        .then(response => {
          this.saving = false
        })
        .catch(err => {
          this.error = err
          clearInterval(this.timer)
        })
    }
  }
}
</script>

<template lang="pug">
  div(v-if="connection.ready")
    block-map(
      v-bind:class="$style.module"
      v-bind:context="context")

    div(
      v-if="error"
      v-bind:class="[$style.sync, $style.error]")

      icon(name="times")

    div(
      v-else
      v-bind:class="$style.sync",
      v-on:click="save")

      icon(
        v-if="saving"
        name="spinner"
        animation="spin")

      icon(
        v-else
        name="check")
</template>

<style lang="sass" module>
  .module
    white-space: nowrap
    text-align: center

  .module > *
    display: inline-block

  .sync
    top: 10px
    left: 10px
    color: white
    width: 25px
    height: 25px
    cursor: pointer
    display: flex
    position: fixed
    font-size: 10px
    background: green
    align-items: center
    border-radius: 50%
    justify-content: center

  .error
    background: red
</style>
