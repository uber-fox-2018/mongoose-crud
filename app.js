const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

const index = require('./routes/index');
const books = require('./routes/books');
// const customers = require('./routes/customers');
// const transactions = require('./routes/transactions');

mongoose.connect('mongodb://localhost:27017/library', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoose success');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/books', books);
// app.use('/customers', customers);
// app.use('/transactions', transactions);

app.listen(3000, ()=> {
  console.log('listening to 3000')
})

module.exports = app;