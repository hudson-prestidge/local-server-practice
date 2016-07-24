module.exports = {

  index: function(req, res) {
    res.send('Hello World!')
  },

  home: function(req, res) {
    res.sendFile(__dirname + '/../index.html')
  },

  webApps: function(req, res) {
    res.send('<h1>' + req.query.name + ' is building web apps!</h1>')
  }
}
