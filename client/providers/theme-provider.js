// Vendor Modules
import Vue from 'vue'

// Create Provider
export function provide(config) {
  var _theme = {}

  Vue.prototype.theme = function(styles) {
    if (typeof styles === 'string') {
      styles = [styles]
    }

    return styles.map(style => {
      if (Object.getOwnPropertyDescriptor(this, style) !== undefined) {
        if (!this[style]) {
          return
        }
      }

      return this.$style[style] || _theme[style] || style
    })
  }

  Vue.prototype.theme.use = function(theme) {
    _theme = theme
  }
}
