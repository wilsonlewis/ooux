// Load Environment
require('dotenv').config()

// Load http server
var http = require('http')

// Vendor Modules
var express = require('express')

// Create Server
var server = express()

// Load Application
var application = require('./application')

// Create Application
var app = application(server)

// Start Application
app.listen(app.get('port'), app.get('host'), () => {
  var location = 'http://' + app.get('host') + ':' + app.get('port')

  console.log('Server listening at:', location)
})
