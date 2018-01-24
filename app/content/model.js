var slug = require('lodash/kebabCase')

module.exports = class Model {
  constructor(attributes) {
    this.fill(attributes)
  }

  fill(attributes) {
    this.attributes = attributes

    for (var key in attributes) {
      this.define(key, attributes[key])
    }
  }

  define(key) {
    var proto = this.constructor.prototype

    var descriptor = Object.getOwnPropertyDescriptor(proto, key) || {}

    delete this[key]

    var getter =
      descriptor.get ||
      function() {
        return this.getAttribute(key)
      }

    var setter =
      descriptor.set ||
      function(value) {
        this.setAttribute(key, value)
      }

    Object.defineProperty(this, key, {
      get: getter,
      set: setter,
      enumerable: false,
      configurable: false
    })
  }

  getAttribute(key) {
    return this.attributes[key]
  }

  setAttribute(key, value) {
    this.attributes[key] = value

    return this
  }

  destroy() {
    this.constructor.connection.remove({
      collection: this.constructor.collection,
      attributes: this.attributes
    })
  }

  hasMany(relation) {
    var query = relation.query().filter(model => {
      return model.attributes[this.constructor.foreign] == this.id
    })

    var value = () => query.all()

    value.query = () => query

    value.create = attributes => {
      var instance = relation.create(attributes)

      attributes[this.constructor.foreign] = this.id

      return instance
    }

    return value
  }

  belongsTo(relation, foreign) {
    foreign = foreign || this.constructor.foreign

    var query = relation.query().filter(model => {
      return this.attributes[foreign] == model.id
    })

    var value = () => query.first()

    value.associate = model => {
      this.attributes[foreign] = model.id
    }

    return value
  }

  static make(attributes, exists) {
    return new this(attributes)
  }

  static create(attributes) {
    var instance = this.make(attributes)

    this.connection.insert({
      collection: this.collection,
      attributes: attributes
    })

    return instance
  }

  static query() {
    return this.connection.from(this.collection).map(this.make.bind(this))
  }

  static get collection() {
    return slug(this.name).replace(/\y$/, 'ie') + 's'
  }

  static get foreign() {
    return slug(this.name) + '_id'
  }
}
