var express = require('express')
var routes = require(./routes/routes.js)

var PORT = 3000
var app = express()

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.listen(PORT, function() {
  console.log('The server is running, and is listening on port', PORT)
})
