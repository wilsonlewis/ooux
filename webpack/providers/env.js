module.exports = function(bundle) {
  // Load Plugin
  var Dotenv = require('dotenv-webpack')

  // Register Plugin
  bundle.plugins.push(new Dotenv())
}
