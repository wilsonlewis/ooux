module.exports = function(server, config) {
  var fs = require('fs')
  var { resolve } = require('path')

  var path = resolve('./' + config.disks[0].path)

  var name = function() {
    return resolve(path + `/data-${new Date().getTime()}.json`)
  }

  var latest = function(name) {
    var files = fs.readdirSync(path)
      .filter(file => file.slice(0, 4) === 'data')

    return resolve(path + '/' + files.reverse()[0])
  }

  server.get('/data', (req, res, next) => {
    res.send(require(latest()))
  })

  server.post('/data', (req, res, next) => {
    var data = req.body

    fs.writeFile(name(), JSON.stringify(data), err => {
      if (err) {
        res.send(err)
      } else {
        res.send(data)
      }
    })
  })
}
