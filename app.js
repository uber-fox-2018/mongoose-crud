const port        = process.env.PORT || 3000
const express     = require('express')
const app         = express()
const morgan      = require('morgan')
const mongoose = require('mongoose')

const index       = require('./routes/index')
const book        = require('./routes/book')
const customer        = require('./routes/customer')
const transaction        = require('./routes/transaction')

mongoose.connect('mongodb://localhost:27017/library', {useNewUrlParser:true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected!')
});

app.use(express.json())
app.use(express.urlencoded( {extended: false} ))
app.use(morgan('tiny'))

app.use('/', index)
app.use('/api/books', book)
app.use('/api/customers', customer)
app.use('/api/transactions', transaction)


app.listen(port, () => {
  console.log(`its running on ${port}`)
})