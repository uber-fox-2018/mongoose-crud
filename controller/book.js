const Book = require('../model/book');
class BookController {
  
  static getAllBooks(req, res) {
    Book.find(function (err,books) {
      if (err) {
        res.status(500)
            .json({message : "internal server error"})
      } else {
        res.status(200)
            .json({message : "find all books succeed" , result : books})
      }
    })
  }
  static getOneBook(req, res) {
    var query  = Book.where({ _id: req.params.id })
    query.findOne(function (err, book) {
      if (err) {
        res.status(500)
            .json({message : "internal server error"})
      } else {
        if (book == null) {
          res.status(404)
          res.json({message : "no book found" })
        } else {
          res.status(200)
          res.json({message : "find book succeed" , result : book})
        }
      }
    })
  }
  
  static createBook(req,res) {
    let newBook = {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock : req.body.stock
    }
    Book.create(newBook, function (err, book) {
      if (err) {
        res.status(500)
        res.json({message : "internal server error"})
      } else {
        res.status(200)
            .json({message : "book successfully created", result : book})
      }
    })
  }

  static deleteBook(req,res) {
    Book.remove({ _id: req.params.id },function (err, book) {
      if (err) {
        res.status(500)
            .json({message : "internal server error"})
      } else {
        if (book.n == 0) {
          res.status(404)
              .json({message : "no book found" })
        } else {
          res.status(200)
              .json({message : "delete book succeed" , result : book})
        }
      }
    })
  } 

  static updateBook(req,res) {
    var query  = Book.where({ _id: req.params.id })
    query.update(req.body,function (err, book) {
      if (err) {
        res.status(500)
            .json({message : "internal server error"})
      } else {
        if (book.n == 0) {
          res.status(404)
              .json({message : "no book found" })
        } else {
          res.status(200)
              .json({message : "update book succeed" , result : book})
        }
      }
    })
  }
}


module.exports = BookController
