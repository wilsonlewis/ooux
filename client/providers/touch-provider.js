// Vendor Modules
import Vue from 'vue'
import VueTouch from 'vue-touch'

// Create Provider
export function provide(config) {
  // Register Triple Tap
  VueTouch.registerCustomEvent('tripletap', {
    type: 'tap',
    taps: 3
  })

  // Register Router
  Vue.use(VueTouch)
}
