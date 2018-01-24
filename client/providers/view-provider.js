// Vendor Modules
import Vue from 'vue'

// Create Provider
export function provide(config) {
  var namespace = 'ec-'

  var views = [require('../views/library/theme')]

  // Register Providers
  views.forEach(view => {
    var component = view.default

    if (!component.name) {
      component.name =
        namespace +
        component.__file
          .split('/')
          .pop()
          .slice(0, -4)
    }

    Vue.component(component.name, component)
  })
}
