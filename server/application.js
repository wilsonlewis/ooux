module.exports = function(server) {
  // Load Config
  var config = require('../config/server')

  // Locate Server
  server.set('host', config.host)
  server.set('port', config.port)

  // Compile Views
  server.set('view engine', config.engine)

  // Something
  server.set('views', config.views)

  // Load Providers
  var providers = [
    require('./providers/filesystem'),
    require('./providers/requests'),
    require('./providers/session'),
    require('./providers/data')
    // require('./providers/spa')
  ]

  // Register Providers
  providers.forEach(provider => provider(server, config))

  // Provide Server
  return server
}
