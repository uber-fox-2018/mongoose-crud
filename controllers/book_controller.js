const Book = require('../models/book');

module.exports = {
    insert: (req,res) =>{
        Book.create(req.body)
        .then((book) => {
            res.status(201).json({
                msg: 'data inserted',
                book
            })
        })
        .catch((err) => {
            res.status(500).json({
                msg: 'inser failed'
            })
        });
    },

    read: (req,res) =>{
        Book.find({})
        .then((book) => {
            res.status(200).json({
                msg: 'data found',
                book
            })
        })
        
        .catch((err) => {
            res.status(500).json({
                msg: 'data not found'
            })
        });
    },

    update: (req,res)=>{
        Book.updateOne({_id : req.params.id},{title : req.body.title})
        .then((updated) => {
            res.status(201).json({
                msg: 'data updated',
                updated
            })
        })

        .catch((err) => {
             res.status(500).json({
                msg: 'update failed'
            })
        });
    },

    remove: (req,res)=>{
        Book.deleteOne({_id : req.params.id})
        .then((deleted) => {
            res.status(201).json({
                msg: 'data deleted',
                deleted
            })
        })
        .catch((err) => {
            res.status(500).json({
                msg: 'delete failed'
            })
        });
    }
};
