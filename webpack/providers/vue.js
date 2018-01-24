module.exports = function(config) {
  // Register Vue Extension
  config.resolve.extensions.push('.vue')

  // Register Vue Alias
  config.resolve.alias.vue$ = 'vue/dist/vue.esm.js'

  // Register Vue Loader
  config.module.rules.push({
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
      scss: ['vue-style-loader', 'css-loader', 'sass-loader'],
      sass: ['vue-style-loader', 'css-loader', 'sass-loader?indentedSyntax']
    }
  })
}
