module.exports = function(server, config) {
  // Disable for Development
  if (config.env === 'development') {
    return
  }

  // Load Single Page App
  var spa = require('express-spa')

  // Create Middleware
  var middleware = spa(`../storage/bundles/${config.bundle}/index.html`)

  // Register Middlware
  server.use(middleware)
}
