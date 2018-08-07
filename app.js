const express = require('express');
const app = express();
var mongoose = require('mongoose');
var logger = require('morgan');

mongoose.connect('mongodb://localhost:27017/mongooseCRUD', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected...!');
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const router = require('./routes/index');
app.use(router);


app.listen(3000, () => {
    console.log('Listening to port 3000...');
})  