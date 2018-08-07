const mongoose = require('mongoose')
const Schema = mongoose.Schema

let bookSchema = new Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number
})

let Book = mongoose.model('books', bookSchema)

module.exports = Book