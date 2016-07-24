var express = require('express')
var routes = require('./routes/routes.js')

var PORT = 3000
var app = express()

app.get('/', routes.index(req, res))

app.listen(PORT, function() {
  console.log('The server is running, and is listening on port', PORT)
})
