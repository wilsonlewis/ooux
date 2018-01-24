module.exports = function(server, config) {
  // Vendor Modules
  var session = require('express-session')

  // Create Session Options
  var options = {
    secret: config.key,
    resave: true,
    saveUninitialized: true
  }

  // Add Session Middleware
  server.use(session(options))
}
