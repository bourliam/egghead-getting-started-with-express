var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello Maxou !')
})

app.get('/yo', function (req, res) {
  res.send('yo Max!')
})

var server = app.listen(3000, function () {
  console.log('Server running!! \n => http://localhost:' + server.address().port)
})
