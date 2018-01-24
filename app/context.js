var Model = require('./content/model')
var Block = require('./block')

module.exports = class Context extends Model {
  get blocks() {
    return this.hasMany(Block)
  }
}