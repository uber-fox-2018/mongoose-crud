const express = require('express')
const app = express()
const indexRouter = require('./routes/index')
const bookRouter = require('./routes/book')
const customerRouter = require('./routes/customer')
const transactionRouter = require('./routes/transaction')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected');
});

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', indexRouter)
app.use('/books', bookRouter)
app.use('/customers', customerRouter)
app.use('/transactions', transactionRouter)

app.listen(3000, () => {
    console.log(`Listening on port 3000`);
})