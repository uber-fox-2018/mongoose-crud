const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const db = require('./config/key').mongoURI
const port = process.env.PORT || 3000

const index = require('./routes/index');
const books = require('./routes/books');
// const customers = require('./routes/customers');
// const transactions = require('./routes/transactions');


mongoose.connect(db, {useNewUrlParser: true})
.then(()=> console.log('connected mongodb'))
.catch(err => console.log(err))

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('mongoose success');
// });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/books', books);
// app.use('/customers', customers);
// app.use('/transactions', transactions);

app.listen(port, ()=> {
  console.log(`listening ${port}`)
})

module.exports = app;