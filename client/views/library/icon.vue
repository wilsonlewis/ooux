
<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },

      animation: {
        type: String
      }
    }
  }
</script>

<template lang="pug">
  i(v-bind:class="'fas fa-' + name + (animation ? ' fa-' + animation : '')")
</template>
