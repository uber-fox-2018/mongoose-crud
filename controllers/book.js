const book = require('../models/book');
const errorHandler = require('../helpers/errorHandler');
const notFound = require('../helpers/notFound');

const getAllBook = (req, res) => {
  book.find({})
  .then(books => {
    res.status(200).json(books);
  })
  .catch((err)=> {
    notFound(err);
  })
}

const createBook = (req, res) => {
  const {isbn, title, author, category, stock} = req.body;
  book.create({
    isbn, title, author, category, stock
  })
  .then(data => {
    res.status(201).json({msg: 'book added', data})
  })
  .catch((err)=> {
    errorHandler(err);
  })
}

const getBook = (req, res) => {
  book.findById(req.params.id)
  .then(book => {
    res.status(200).json(book);
  })
  .catch((err)=> {
    notFound(err);
  })
}

const updateBook = (req, res) => {
  const {isbn, title, author, category, stock} = req.body;
  book.updateOne({'_id': req.params.id}, {$set: {isbn, title, author, category, stock}})
  .then(updated => {
    res.status(200).json(updated);
  })
  .catch((err)=> {
    errorHandler(err);
  })
}



module.exports = {
  getAllBook,
  createBook,
  getBook,
  updateBook,
};
