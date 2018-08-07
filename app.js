const express = require('express')
const app = express()
const router = require('./routes/index');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongoose_CRUD');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to mongodb');
});

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/',router)


app.listen(3000,()=>{
    console.log('listening on port 3000');
    
})