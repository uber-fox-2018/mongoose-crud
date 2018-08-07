const Book = require('../models/book');

module.exports = {

    insertSeedBooks: (req, res) => {
        // console.log(Book)
        Book.insertMany([{
            isbn: "978-1-60309-057-5",
            title: "Dragon Puncher",
            author: "James Kochalka",
            category: "All Ages",
            stock: 3
        }, {
            isbn: "978-1-891830-77-8",
            title: "Every Girl is the End of the World for Me",
            author: "Jeffrey Brown",
            category: "Mature (16+)",
            stock: 5
        }
        ])
            .then(books => {
                res.status(200).json({
                    msg: `Books data added!`,
                    books
                })
            })
            .catch(err => {
                res.status(500).json(err);
            })
    },

    findAllBooks: (req, res) => {
        Book.find({})
            .then(books => {
                res.status(200).json({
                    msg: `Found all records of Books`,
                    books
                });
            })
            .catch(err => {
                res.status(500).json(err);
            })
    },

    createBook: (req, res) => {
        // console.log(req.body)
        Book.create({
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        })
            .then(book => {
                res.status(200).json({
                    msg: `New book added!`,
                    book
                });
            })
            .catch(err => {
                res.status(500).json(err);
            })
    },

    updateBook: (req, res) => {
        Book.updateOne({ _id: req.params.id }, {
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        })
            .then(updated_book => {
                res.status(200).json({
                    msg: `Book updated!`,
                    updated_book
                });
            })
            .catch(err => {
                res.status(500).json(err);
            })
    },

    deleteBook: (req, res) => {
        Book.deleteOne({ _id: req.params.id })
            .then(deleted_book => {
                res.status(200).json({
                    msg: `Book deleted from record.`,
                    deleted_book
                });
            })
            .catch(err => {
                res.status(500).json(err);
            })
    }

}