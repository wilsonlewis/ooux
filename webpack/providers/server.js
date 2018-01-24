module.exports = function(config, server) {
  // Load Application
  var application = require('../../server/application')

  // Register Application
  config.devServer = {
    host: server.host,
    port: server.port,
    before: server => application(server, config),
    noInfo: true,
    overlay: true,
    historyApiFallback: { index: '/' }
  }
}
