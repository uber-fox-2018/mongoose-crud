const Book = require('../models/books') 

class Library{

    static createBook(req, res, next){
        var {isbn, title, author, category, stock} = req.body
        Book.create({isbn, title, author, category, stock}, (err, result) => {
            res.json(result)
        })
    }

    static readBooks(req, res, next){
        Book.find({}, function(err, books){
            if(err) return next(err)
            res.json(books)
        })
    }

    static readOneBook(req, res, next){
        Book.findById({_id : req.params.id}, function(err, books){
            if(err) return next(err)
            res.json(books)
        })
    }

    static updateBook(req, res, next){
        Book.update({_id : req.params.id}, {$set : {
            isbn: req.body.isbn,
            title: req.body.title,
            author : req.body.author,
            category : req.body.category,
            stock : req.body.stock
        }})
        .exec(function(err, result){
            res.json(result)
        })
    }

    static deleteBook(req, res, next){
        Book.deleteOne({_id: req.params.id}, function(err){
            res.json(`Successfully delete id ${req.params.id}`)
        })
    }
}

module.exports = Library


