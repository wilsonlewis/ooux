// Create Options
var config = {}

// Load Providers
var providers = [
  require('./providers/content-provider'),
  require('./providers/filters-provider'),
  require('./providers/touch-provider'),
  require('./providers/route-provider'),
  // require('./providers/view-provider'),
  require('./providers/theme-provider'),
  require('./providers/contentful-provider'),
  require('./providers/application-provider')
]

// Register Providers
providers.forEach(provider => {
  provider.provide(config)
})
