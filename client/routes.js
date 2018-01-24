// Load Pages
import Home from './views/pages/home'

// Create Routes
export default [
  { path: '/home', component: Home },
  { path: '*', redirect: '/home' }
]
