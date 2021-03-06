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

test('routes.home responds with index.html', function(t) {
  var res = {
    sendFile: sendFile
  }

  routes.home(null, res)

  function sendFile (file) {
    t.equals(file, "/Users/Charcon/Workspace/local-server-practice/routes/../index.html")
    //this test sucks, because it's hard coded to only work in this particular directory
    //on this particular computer
    //part two, it now sucks even more because you included a '..' in the path.
    t.end()
  }
})


test('routes.webapps response includes a querystring parameter', function(t) {
  var res = {
    send: send
  }
  var req = {
    query: {
      name: 'Hudson'
    }
  }

  routes.webApps(req, res)

  function send (msg) {
    t.equals(msg, "<h1>Hudson is building web apps!</h1>")
    t.end()
  }
})
