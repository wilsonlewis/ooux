module.exports = function(config, server) {
  // Register Loader
  if (typeof config.output !== 'string') {
    return
  }

  config.output = {
    path: require('path').resolve(`./storage/bundles/${server.bundle}`),
    filename: `${config.output}.js`,
    publicPath: '/'
  }
}
