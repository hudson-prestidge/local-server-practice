var test = require('tape')
var routes = require('../routes/routes.js')


test('routes.index responds with "Hello world!"', function(t) {
  var res = {
    send: send
  }

  routes.index(null, res)

  function send (msg) {
    t.equals(msg, "Hello World!")
    t.end()
  }
})
