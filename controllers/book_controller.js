const Books = require('../models/books')

var insertBook = (req, res) => {
    Books.create({
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
    })
    .then(() => {
        res.status(201).json({
            msg: 'create success'
        })
    }).catch((err) => {
        res.status(500).json({
            msg: err.message
        })
    });
}

var deleteBook = (req, res) => {
    let id = req.params.id
    Books.remove({ _id: id})
    .then(() => {
        res.status(200).json({
            msg: `Delete book with id: ${id}`
        })
    }).catch((err) => {
        res.status(500).json({
            msg: err.message
        })
    });
}

var updateBook = (req, res) => {
    let id = req.params.id
    Books.update({_id: id},
       { $set: {
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        }}
    )
    .then(() => {
        res.status(200).json({
            msg: `Update book with id : ${id}`
        })
    }).catch((err) => {
        res.status(500).json({
            msg: err.message
        })
    });
}

var getBook = (req, res) => {
    Books.find()
    .then((result) => {
        res.status(200).json({
            msg: "Data all books",
            result
        })
    }).catch((err) => {
        res.status(500).json({
            msg: err.message
        })
    });
}


module.exports = {
    insertBook,
    deleteBook,
    updateBook,
    getBook
}
