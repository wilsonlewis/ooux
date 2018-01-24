var collect = require('collect.js')
var uniqueId = require('lodash/uniqueId')
var moment = require('moment')

module.exports = class Connection {
  constructor(data) {
    this.data = data
    this.ready = false
  }

  from(collection) {
    return collect(this.data[collection])
  }

  insert(statement) {
    var collection = statement.collection
    var attributes = statement.attributes

    if (attributes.id === undefined) {
      attributes.id = uniqueId(moment().unix())
    }

    this.data[collection].push(attributes)
  }

  remove(statement) {
    var collection = this.data[statement.collection]
    var attributes = statement.attributes

    for (var index in collection) {
      if (collection[index].id == attributes.id) {
        collection.splice(index, 1)
        return
      }
    }
  }
}