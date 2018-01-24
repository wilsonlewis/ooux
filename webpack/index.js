// Load Environment
require('dotenv').config()

// Load Base Config
var config = require('../config/webpack')

// Load Bundler
var bundle = require('./bundle')

// Bundle Config
module.exports = bundle(config)
