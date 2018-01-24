module.exports = function(bundle) {
  // Register Babel
  bundle.module.rules.push({
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/
  })
}
