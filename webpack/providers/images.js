module.exports = function(config) {
  // Register Loader
  config.module.rules.push({
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      outputPath: 'images/'
    }
  })
}
