module.exports = {
  env: process.env.NODE_ENV,

  name: process.env.APP_NAME || 'Elephant',

  host: process.env.APP_HOST || 'localhost',

  port: process.env.APP_PORT || '3000',

  bundle: process.env.APP_BUNDLE || 'dev',

  key: process.env.APP_KEY,

  engine: 'pug',

  views: 'resources/views',

  template: 'index.pug',

  disks: [
    {
      path: 'storage/public',
      prefix: '/storage'
    }
  ]
}
