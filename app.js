const express = require('express')
const app = express()
const mongoose = require('mongoose')

var bookRoutes = require('./routes/book')
var customerRoutes = require('./routes/customer')
var db = mongoose.connection

mongoose.connect('mongodb://localhost:27017/mongoose_crud', { useNewUrlParser: true })
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected mongodb!');
});

app.use(express.urlencoded({ extended: false }));

// app.use('/', (req, res) => {
//     res.send('Mongoose CRUD')
// })
app.use('/book', bookRoutes)
app.use('/customer', customerRoutes)

app.listen(3030, () => {
    console.log('app listening on port 3030!')
})