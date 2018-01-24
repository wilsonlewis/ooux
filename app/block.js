var Model = require('./content/model')
var Field = require('./field')

module.exports = class Block extends Model {
  destroy() {
    this.fields().forEach(field => field.destroy())
    super.destroy()
  }
  
  get fields() {
    return this.hasMany(Field)
  }

  get properties() {
    return this.fields.query().filter(field => field.type !== 'action').all()
  }

  get actions() {
    return this.fields.query().filter(field => field.type === 'action').all()
  }
}