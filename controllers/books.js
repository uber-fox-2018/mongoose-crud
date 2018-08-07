const Book = require('../models/book')

module.exports = {
  addBook: (req, res) => {
    Book.create({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    })
      .then(newBook => {
        res.status(200).json({
          msg: "Save book success",
          newBook
        })
      })
      .catch(err => {
        res.status(500).json({
          error: err.message
        })
      })
  },

  getBook: (req, res) => {
    Book.find({})
      .then(getAllBook => {
        res.status(200).json({
          msg: "Get All Books Success",
          getAllBook
        })
      })
      .catch(err => {
        res.status(500).json({
          error: err
        })
      })

  },

  updateBook: (req, res) => {
    Book.updateOne({ _id: req.params.id }, {
      $set: {
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
      }
    })
      .then(bookUpdate => {
        res.status(201).json({
          message: "Update book success",
          bookUpdate
        })
      })
      .catch(err => {
        res.status(500).json({
          error: err
        })
      })
  },

  deleteBook: (req, res) => {
    Book.deleteOne({ _id: req.params.id })
      .then(deleteBook => {
        res.status(200).json({
          message: "Delete book success",
          deleteBook
        })
      })
      .catch(err => {
        res.status(500).json({
          error: err
        })
      })
  }
}