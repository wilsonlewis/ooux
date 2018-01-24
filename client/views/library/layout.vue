
<template lang="pug">
  div(
    v-if="image && visible"
    v-bind:class="$style.module")

    img(v-bind:src="url")
</template>

<script>
export default {
  props: {
    visible: Boolean,
    image: String,
    base: {
      type: String,
      default: '/storage/layouts'
    }
  },

  computed: {
    url() {
      return `${this.base}/${this.image}.png`
    }
  },

  mounted() {
    global.addEventListener('keyup', this.toggle)
  },

  beforeDestroy() {
    global.removeEventListener('keyup', this.toggle)
  },

  methods: {
    toggle({ key }) {
      if (key === 'Enter') {
        this.$emit('update:visible', !this.visible)
      }
    }
  }
}
</script>

<style lang="sass" module>
  .module
    top: 0
    left: 0
    right: 0
    height: 800vh
    opacity: 0.3
    z-index: 100000
    position: absolute
    overflow: hidden
    pointer-events: none
    
  .module img
    left: 50%
    position: absolute
    transform: translateX(-50%)
</style>
