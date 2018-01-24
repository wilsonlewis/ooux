// Vendor Modules
import Vue from 'vue'

// Load Template
import App from '../views'

// Create Provider
export function provide(config) {
  // Disable Console Message
  Vue.config.productionTip = false

  // Register Mount Location
  config.el = '#app'

  // Register Template
  config.render = h => h(App)

  // Create Application
  new Vue(config)
}
