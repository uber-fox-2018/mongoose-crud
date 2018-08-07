let Book = require('../models/book')

const findAll = function(req, res) {
  Book.find({}, function(err, books) {
    if (err) {
      console.log(err)
      res.status(400).json({message: 'error', err})
    } else {
      console.log(books)
      res.status(200).json(books)
    }
  })
}

const findById = function(req, res) {
  Book.findById(req.params.id, function(err, book) {
    if (err) {
      console.log(err)
      res.status(400).json({message: 'error', err})
    }
    else {
      console.log(book)
      res.status(200).json({message: 'Book retrieved', book})
    }
  })
}

const addBook = function(req, res) {
  const { isbn, title, author, category, stock } = req.body
  Book.create({
    isbn, title, author, category, stock
  }, function(err, book) {
    if (err) {
      console.log(err)
      res.status(400).json({message: 'error', err})
    } else {
      console.log(book)
      res.status(200).json({message: 'Book created', book})
    }
  })
}

const updateBook = function(req, res) {
  const { isbn, title, author, category, stock } = req.body
  Book.updateOne({ _id: req.params.id }, {
    isbn, title, author, category, stock
  }, function(err, book) {
    if (err) {
      console.log(err)
      res.status(400).json({message: 'error', err})
    } else {
      console.log(book)
      res.status(200).json({message: 'Book updated', book})
    }
  })
}

const deleteBook = function(req, res) {
  Book.findByIdAndDelete(req.params.id, function(err, book) {
    if (err) {
      console.log(err)
      res.status(400).json({message: 'error', err})
    } else {
      console.log(book)
      res.status(200).json({message: 'Book deleted', book})
    }
  })
}

module.exports = {
  findAll,
  findById,
  addBook,
  updateBook,
  deleteBook
}