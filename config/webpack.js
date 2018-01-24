module.exports = {
  entry: './client/index.js',

  output: process.env.WEB_NAME || 'entry',

  devtool: process.env.WEB_MAPS || 'eval-source-map',

  module: {
    rules: []
  },

  plugins: [],

  resolve: {
    extensions: ['*', '.js', '.json'],
    alias: {
      '@app': './app'
    }
  }
}
