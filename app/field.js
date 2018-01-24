var Model = require('./content/model')

module.exports = class Field extends Model {
  get block() {
    // Order of import hack
    return this.belongsTo(require('./block'))
  }

  get reference() {
    // Order of import hack
    return this.belongsTo(require('./block'), 'reference_id')
  }
}