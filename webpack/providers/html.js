module.exports = function(config, server) {
  // Load Plugin
  var Html = require('html-webpack-plugin')

  // Create Plugin
  var plugin = new Html({
    title: server.name,
    inject: true,
    filename: 'index.html',
    template: `${server.views}/${server.template}`
  })

  // Register Plugin
  config.plugins.push(plugin)
}
