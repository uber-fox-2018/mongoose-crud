const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
  isbn: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Book', bookSchema)