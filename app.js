const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/library', { useNewUrlParser: true })
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('connected to library database')
})

app.use(express.urlencoded({extended: true}))

const indexRoute = require('./routes/index')
app.use('/', indexRoute)

app.listen(3000, () => console.log('listening on port 3000'))