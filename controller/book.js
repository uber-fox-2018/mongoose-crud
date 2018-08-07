const Books = require('../models/book')

class Book{
    static Add(req,res){
        Books.create({
        isbn:req.body.isbn,
        title:req.body.title,
        author:req.body.author,
        category:req.body.category,
        stock:req.body.stock
    },  function(err,book){
            if(err) return handleError(err)
            res.status(201)
            res.json({
                message:"success added book",
                book
            })
        })
    }
    static ReadAll(req,res){
        Books.find({},function(err,books){
            if(err) return handleError(err)
            res.status(200)
            res.json(books)
        })
    }
    static ReadOne(req,res){
        Books.findById(req.params.id,function(err,book){
            if(err) return handleError(err)
            res.status(200)
            res.json(book)
        })
    }
    static Update(req,res){
        Books.findByIdAndUpdate(req.params.id,{
            isbn:req.body.isbn,
            title:req.body.title,
            author:req.body.author,
            category:req.body.category,
            stock:req.body.stock
        }, function(err,book){
            if(err) return handleError(err)
            res.status(201)
            res.json(book)            
        })
    }
    static Delete(req,res){
        Books.findByIdAndDelete(req.params.id,function(err,book){
            if(err) return handleError(err)
            res.status(201)
            res.json(book)    
        })
    }
}

module.exports = Book