var express = require('express')
var routes = require('./routes/routes.js')

var PORT = 3001
var app = express()

app.get('/', routes.index)

app.get('/home', routes.home)

app.get('/webapps', routes.webApps)

app.listen(PORT, function() {
  console.log('The server is running, and is listening on port', PORT)
})
