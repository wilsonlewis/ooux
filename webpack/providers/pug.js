module.exports = function(config) {
  // Register Loader
  config.module.rules.push({
    test: /\.pug$/,
    loader: 'pug-loader'
  })
}
