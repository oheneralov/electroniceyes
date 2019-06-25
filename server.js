const express = require('express')
const path = require('path')
const compression = require('compression')

var app = express()

app.use(compression())

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'build')))

app.get('/backend/about', function(req, res){
const text = `The program is a robot vision. The neural network can be trained using:

    adding zipped datasets manually
    Adding datasets from popular source (kaggle etc.)`
    res.send({data: text})
    
})

// send all requests to index.html so browserHistory works
app.get('/frontend/*', function (req, res) {
  console.log('yes')
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
