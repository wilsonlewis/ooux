module.exports = function(server, config) {
  // Vendor Modules
  var path = require('path')
  var express = require('express')

  // Resolve Absolute Path
  var resolve = function(...args) {
    return path.resolve('./', ...args)
  }

  // Serve Directory
  var serve = function(disk) {
    var absolute = resolve(disk.path)
    var directory = express.static(absolute)

    if (disk.prefix) {
      server.use(disk.prefix, directory)
    } else {
      server.use(directory)
    }
  }

  // Serve Files
  config.disks.forEach(serve)

  // Serve Bundle
  if (config.env !== 'development') {
    var bundle = {
      path: `storage/bundles/${config.bundle}`
    }

    serve(bundle)
  }
}
