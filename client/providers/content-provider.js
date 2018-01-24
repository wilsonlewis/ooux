// Vendor Modules
import Vue from 'vue'
import Model from '@app/content/model'
import Connection from '@app/content/connection'
import axios from 'axios'

// Create Provider
export function provide(config) {
  var content = {}

  // var context = require.context('../../content/data', false, /\.json$/)

  // context.keys().forEach(key => {
  //   content[key.slice(2,-5)] = context(key)
  // })

  config.data = {
    connection: new Connection({
      blocks: [],
      fields: [],
      contexts: []
    })
  }

  Model.connection = config.data.connection
  Vue.prototype.connection = config.data.connection

  axios.get('/data')
    .then(response => {
      config.data.connection.data = response.data
      config.data.connection.ready = true
    })
}
