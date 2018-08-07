const Book = require('../models/Book');

module.exports = {
    add : (req,res)=>{
        const {isbn, title, author, category, stock} = req.body
        Book.create({isbn,title,author,category,stock})
            .then(newBook=>{
                res.status(201).json(newBook)
            })
            .catch(err=>{
                res.status(500).json({msg:err})
            })
    }, 
    
    getAll : (req,res)=>{
        Book.find()
            .then(books=>{
                res.status(200).json(books)
            })
            .catch(err=>{
                res.status(500).json({msg:err})
            })
    }, 
    
    getOne: (req,res)=>{
        Book.findById(req.params.id)
            .then(book=>{
                res.status(200).json(book)
            })
            .catch(err=>{
                res.status(500).json({msg:err})
            })
    }, 
    
    update: (req,res)=>{
        Book.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
            .then(updatedBook=>{
                res.status(200).json(updatedBook)
            })
            .catch(err=>{
                res.status(500).json({msg:err})
            })
    },
    
    remove: (req,res)=>{
        Book.remove({_id: req.params.id})
            .then(()=>{
                res.status(200).json({message: 'We deleted it!'});
            })
            .catch(err=>{
                res.status(500).json({msg:err})
            })
    }
}
