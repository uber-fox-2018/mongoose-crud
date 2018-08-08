const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const book = require('./routes/book')
const customer = require('./routes/customer')
const trx = require('./routes/trx')

var mongoose = require('mongoose');

mongoose.connect("mongodb://lib-books:qwer123@ds215822.mlab.com:15822/library", (req, res) => {
    
    console.log('connect db');

})

var db = mongoose.connection;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/book', book)
app.use('/customer', customer)
app.use('/trx', trx)

app.listen(3000, console.log(`connect to port 3000`))