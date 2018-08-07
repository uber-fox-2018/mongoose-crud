const Book = require('../models/Book')

module.exports = {
    index: (req, res) => {
        Book
        .find()
        .then( books => {
            res.status(200).json({
                "message": "Success for get books",
                "data": books
            })
        })
        .catch( err => {
            res.status(500).json({
                "message": err.message,
            })
        })
        
                
    },

    show: (req, res) => {
        let id = req.params.id
        Book
        .findOne({_id: id})
        .then( book => {
            res.status(200).json({
                "message": "Success for get a book",
                "data": book
            })
        })
        .catch( err => {
            res.status(500).json({
                "message": err.message,
            })
        })
        
        
    }, 

    create: (req, res) => {
        let newBook = {
            "isbn": req.body.isbn,
            "title": req.body.title,
            "author": req.body.author,
            "category": req.body.category,
            "stock": req.body.stock
        }

        Book
        .create(newBook)
        .then( book => {
            res.status(200).json({
                "message": "Success for add a book",
            })
        })
        .catch( err => {
            res.status(500).json({
                "message": err.message,
            })
        })

        

    }, 

    delete: (req, res) => {
        let id = req.params.id
        Book
        .deleteOne({_id:id})
        .then( book => {
            res.status(200).json({
                "message": `Success for delete id: ${id}`
            })
        })
        .catch( err => {
            res.status(500).json({
                "message": err.message
            })
        })
                
    }, 

    update: (req, res) => {
        let id = req.params.id
        let aBook = {
            "isbn": req.body.isbn,
            "title": req.body.title,
            "author": req.body.author,
            "category": req.body.category,
            "stock": req.body.stock
        }

        Book
        .updateOne({_id:id}, aBook)
        .then( book => {
            res.status(200).json({
                "message": "Success for update a book"
            })
        })
        .catch( err => {
            res.status(500).json({
                "message": err.message,
            })
        })

        
        
    }
     
}