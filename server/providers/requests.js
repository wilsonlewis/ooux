module.exports = function(server, config) {
  // Vendor Modules
  var bodyParser = require('body-parser')

  // Create Middleware
  var parser = bodyParser.urlencoded({ extended: false })

  // Add Encoding Middleware
  server.use(parser)
  server.use(bodyParser.json());
}
