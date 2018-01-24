module.exports = function(config) {
  // Load Server Config
  var server = require('../config/server')

  // Load Providers
  var providers = [
    require('./providers/env'),
    require('./providers/alias'),
    require('./providers/output'),
    require('./providers/vue'),
    require('./providers/babel'),
    require('./providers/images'),
    require('./providers/server'),
    require('./providers/html'),
    require('./providers/pug')
  ]

  // Register Providers
  providers.forEach(provide => {
    provide(config, server)
  })

  // Provide Config
  return config
}
