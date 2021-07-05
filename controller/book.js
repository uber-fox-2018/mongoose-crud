const Book = require("../models/books");
// const ObjectId = require("mongodb").ObjectId;
var mongoose = require("mongoose");

module.exports = {
  create_book: (req, res) => {
    let book = new Book({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    });

    book
      .save()
      .then(newBook => {
        res
          .status(200)
          .json({ msg: "Inserted 2 books into the collection", newBook });
      })
      .catch(() => {
        res.status(500).json({ msg: "err" });
      });
  },

  all_book: (req, res) => {
    Book.find()
      .then(found => {
        res.status(200).json({ msg: "Books available", found });
      })
      .catch(err => {
        res.status(500).json({ msg: "err", err });
      });
  },

  delete_book: (req, res) => {
    let objectId = mongoose.Types.ObjectId;

    Book.deleteOne({ _id: objectId(req.params.id) })
      .then(found => {
        res.status(200).json({ msg: `Book id = ${ objectId(req.params.id)} deleted`, found });
      })
      .catch(err => {
        res.status(500).json({ msg: "err", err });
      });
  },

  update_books: (req, res) => {
    let objectId = mongoose.Types.ObjectId;

    Book.update(
      { _id: objectId(req.params.id) },
      {
        $set: {
          isbn: req.body.isbn,
          title: req.body.title,
          author: req.body.author,
          category: req.body.category,
          stock: req.body.stock
        }
      }
    )
      .then(found => {
        res
          .status(200)
          .json({ msg: `Book id = ${objectId(req.params.id)} updated`, found });
      })
      .catch(err => {
        res.status(500).json({ msg: "err", err });
      });
  }
};
