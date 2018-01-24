// Vendor Modules
import Vue from 'vue'
import VueRouter from 'vue-router'

// Load routes
import routes from '../routes'

// Create Provider
export function provide(config) {
  // Register Router
  Vue.use(VueRouter)

  // Create Router
  var router = new VueRouter({
    mode: 'history',
    routes: routes
  })

  // Load Middleware
  var middlewares = []

  middlewares.forEach(middleware => {
    router.beforeEach(middleware.default)
  })

  // Register Router
  config.router = router
}
