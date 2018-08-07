const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/db-mongoose-crud')


const port = process.env.PORT || 3000

// Include Router
const BookRouter = require('./routes/BookRouter')
const CustomerRouter = require('./routes/CustomerRouter')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

// handler error database mongodb
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log("Db is connected")
})

app.get('/', function(req, res) {
    res.send('CRUD MONGOOSE WITH MONGO DB')
})

app.use('/api/books', BookRouter)
app.use('/api/customers', CustomerRouter)

app.listen(port, () => {
    console.log(`Server is running with port: ${port}`)
})
