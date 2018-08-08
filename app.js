const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Book = require('./routes/books')
const Costumer = require('./routes/costumer')


mongoose.connect('mongodb://localhost:27017/mongooseCRUD')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/books', Book)
app.use('/costumers', Costumer)




app.listen(3000, function(){
    console.log('express');
    
})