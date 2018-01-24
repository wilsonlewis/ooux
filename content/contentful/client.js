var contentful = require('contentful')
var find = require('lodash/find')

module.exports = class Client {
  constructor(options) {
    this.init = this.init.bind(this)

    this.options = options
    this.loaded = false
    this.settings = null

    this.client = contentful.createClient(options)
  }

  load() {
    this.client
      .getEntries({
        'sys.id': process.env.CONTENTFUL_ID,
        include: 3
      })
      .then(this.init)
      .catch(console.error)
  }

  init(results) {
    this.loaded = true
    this.settings = results.items[0].fields
  }

  room(room) {
    return find(this.settings.rooms, ['sys.id', room])
  }

  takeover(room, takeover) {
    return find(this.room(room).fields.takeovers, ['sys.id', takeover])
  }
}
