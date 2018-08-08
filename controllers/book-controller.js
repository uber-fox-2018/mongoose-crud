const Book = require('../models/books_model')

module.exports = {

    Create_New_Book ( req, res ) {

        const newBook = {
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        }

        Book.create( newBook, ( err, response ) => {
            if (err) throw err

            res.status(201).json({
                msg: `success create book`,
                response
            })
            
        })

    },

    Read_Books ( req, res ) {

        Book.find({}, ( err, response ) => {
            if (err) throw err

            res.status(201).json({
                response
            })
            
        })

    },

    Update_Book ( req, res ) {

        const {isbn, title, author, category, stock} = req.body

        Book.findOneAndUpdate({ _id: req.params.id },{$set: 
            {
                isbn: isbn,
                title: title,
                author: author,
                category: category,
                stock: stock
            }
        }, ( err, response ) => {
            if (err) {
                res.status(401).json({
                    err: err
                })
            } else {
                res.status(201).json({
                    msg: `success update book with id ${req.params.id}`,
                    response
                })
            }
        })

    },

    Delete_Book ( req, res ) {
        
        Book.findOneAndRemove({ _id: req.params.id }, ( err, response ) => {
            if (err) throw err

            res.status(201).json({
                msg: `success delete book with ID ${req.params.id}`,
                response
            })
        })
    }

}