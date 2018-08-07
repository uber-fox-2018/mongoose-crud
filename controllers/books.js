const Book = require('../models/books')


module.exports = {
    bookFindAll: (req,res) =>{
        Book
            .find()
            .then(Book => {
                res.status(200).json({
                    msg:'create success',
                    data: Book
                })
            })

            .catch(err => {
                res.status(500).json({
                    msg:'error'
                })
            })
    },
    bookFindOne: (req,res) => {
        Book
            .findOne({
                id:req.params.id
            })
            .then(book => {
                res.status(200).json({
                    msg:'success find id',
                    data: book
                })
            })

            .catch(err => {
                res.status(500).json({
                    msg: 'error'
                })
            })

    },
    bookCreate: (req,res) => {
     
        Book
            .create({
                isbn: req.body.isbn,
                title: req.body.title,
                author: req.body.author,
                category:req.body.category,
                stock:req.body.stock
            })

            .then(book => {
                res.status(200).json({
                    msg:'create success',
                    book
                })
            })

            .catch(err => {
                res.status(500).json({
                    msg:'error'
                })
            })
    },

    bookUpdate: (req,res) => {
        Book
            .update(
                {
                    _id:req.params.id
                },
                {$set:
                    {
                    isbn: req.body.isbn,
                    title: req.body.title,
                    author: req.body.author,
                    category:req.body.category,
                    stock:req.body.stock
                    }
            })

            .then(book => {
                res.status(200).json({
                    msg:'update success',
                    data: book
                })
            })

            .catch(err => {
                res.status(500).json({
                    msg:'error'
                })
            })
    },

    bookDelete: (req,res) => {
        Book
            .deleteOne(
                {
                    _id:req.params.id
                })

            .then(book => {
                res.status(200).json({
                    msg: 'delete success',
                    data: book

                })
            })

            .catch(err => {
                res.status(500).json({
                    msg: 'error'
                })
            })
    }
}



