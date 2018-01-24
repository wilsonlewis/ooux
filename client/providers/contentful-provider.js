import Vue from 'vue'

import contentful from '../../content/contentful/'

export function provide(config) {
  Vue.prototype.contentful = contentful

  config.data.contentful = contentful
}
