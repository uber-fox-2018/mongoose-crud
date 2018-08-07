const Book = require('../models/book')

class BooksController {
  static getBooks(req, res){
    Book.find({}, function(err, books){
      res.status(200).json(books)
    });
  }
  static getOneBook(req, res){
    Book.findById(req.params.id, function (err, book) {
      res.status(200).json(book)
    });
  }
  static addOneBook(req,res){
    Book.create({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
     }, function (err, small) {
      if (err) return handleError(err);
      // console.log(small);
      res.status(200).json(small)
    });
  }
  static addManyBook(req, res){
    // console.log(req.body);
    Book.insertMany(req.body, function(err) {
      res.status(200).json('book(s) sucessfully added')
    });
  }
  static deleteBook(req, res){
    Book.deleteOne({ _id: req.params.id }, function (err){
      res.status(200).json('book sucessfully deleted')
    });
  }
  static updateBook(req, res){
    Book.updateOne({ _id: req.params.id }, {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    }, function(err, book) {
      res.status(200).json('book sucessfully updated')
    });
  }
}

module.exports = BooksController
