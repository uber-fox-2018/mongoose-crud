const mongoose = require('mongoose')
    mongoose.connect('mongodb://localhost:27017/library');

const Book = require('../models/book.js')

class Books{
    static findAll(req,res){
        Book.find({}, function(err, books){
            res.status(200).json({message: "List of books", books: books})
        })
    }

    static findOne(req,res){
        Book.findById(req.params.id, function(err, book){
            if(err){res.status(500).json(err.message)}
            res.status(200).json(book)
        })
    }

    static create(req,res){
        Book.create({
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        }, function(err, success){
            if(err){res.status(500).json(err.message)}
            res.status(200).json('Book data added!')
        })
    }

    static update(req,res){
        Book.updateOne({_id: req.params.id},{
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        }, function(err, success){
            if(err){res.status(500).json(err.message)}
            res.status(200).json('Book data already updated')
        })
    }

    static delete(req,res){
        Book.deleteOne({_id: req.params.id}, function(err,success){
            if(err){res.status(500).json(err.message)}
            res.status(200).json('Book data already deleted')
        })
    }
}

module.exports = Books