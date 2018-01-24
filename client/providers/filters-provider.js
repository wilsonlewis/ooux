// Vendor Modules
import Vue from 'vue'

// Create Provider
export function provide(config) {
  // Load Filters
  var filters = {
    date: require('../support/helpers/date')
  }

  // Register Filters
  for (var name in filters) {
    Vue.filter(name, filters[name].default)
  }
}
