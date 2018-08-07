let mongoose = require('mongoose');
let Schema = mongoose.Schema

let bookSchema = new Schema({
    isbn: String,
    title: String,
    author: String,
    category: String,
    stock: Number
})

let Book = mongoose.model('Book',bookSchema)
module.exports = Book

