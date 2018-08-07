const Book = require('../model/books')
const ObjectId = require('mongodb').ObjectID

const addBook = (req,res) => {
    const { isbn, title, author, category, stock} = req.body
      Book.create({
        isbn: isbn,
        title: title,
        author: author,
        category: category,
        stock: stock
    })
    .then((data) => {
        res.status(201).json({
            message: `Successfully create a book`,
            data: data
        })
    })
    .catch((err) => {
        res.status(400).json({
            message: err.message
        })
    })
}

const readBook = (req,res) => {
    Book.find()
        .then((data_books) => {
            res.status(200).json({
                msg: `Books Data`,
                data: data_books
            })
        })
        .catch((err) => {
            res.status(400).json({
                msg: err.message
            })
        })
}

const removeBook = (req,res) => {
    Book.deleteOne({_id: ObjectId(req.params.id)})
    .then(() => {
        res.status(201).json({
            msg: `Succesfully deleted`
        })
    })
    .catch((err) => {
        res.status(400).json({
            msg: err.message
        })
    })
}

const updateBook = (req,res) => {
    const { isbn, title, author, category, stock} = req.body
    Book.findOneAndUpdate({_id: ObjectId(req.params.id)}, {$set:{isbn:isbn, title: title, author: author, category: category, stock: stock}})
    .then(() => {
        res.status(201).json({
            msg: `data succesfully updated`
        })
    })
    .catch((err) => {
        res.status(400).json({
            msg: err.message
        })
    })
}

module.exports = {
    addBook,
    readBook,
    removeBook,
    updateBook
}