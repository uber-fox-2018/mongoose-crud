const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bookSchema = new Schema({
    isbn: String,
    title: String,
    author: String,
    category: String,
    stock: Number
})

var Books = mongoose.model('Books', bookSchema)

module.exports = Books