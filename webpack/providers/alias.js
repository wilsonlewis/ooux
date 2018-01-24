module.exports = function(bundle) {
  var { resolve } = require('path')
  var aliases = bundle.resolve.alias

  // Register Babel
  for (var alias in aliases) {
    if (aliases[alias][0] === '.') {
      aliases[alias] = resolve(aliases[alias])
    }
  }
}
