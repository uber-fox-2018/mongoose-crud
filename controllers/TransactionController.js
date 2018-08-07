const Transaction = require('../models/Transaction')

module.exports = {
    index: (req, res) => {
        Transaction
        .find()
        .populate('booklist')
        .then( transactions => {
            // console.log(transactions)
            res.status(200).json({
                "message": "Success for get transactions",
                "data": transactions
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
        Transaction
        .findOne({_id: id})
        .populate('booklist')
        .then( transaction => {
            res.status(200).json({
                "message": "Success for get a transaction",
                "data": transaction
            })
        })
        .catch( err => {
            res.status(500).json({
                "message": err.message,
            })
        })
        
        
    }, 

    create: (req, res) => {
        let newTransaction = {
            member: req.body.member,
            days: req.body.days,
            out_date: req.body.out_date,
            due_date: req.body.due_date,
            in_date: req.body.in_date,
            fine: req.body.fine,
            booklist: req.body.booklist
        }
        console.log(newTransaction)
        Transaction
        .create(newTransaction)
        .then( transaction => {
            res.status(200).json({
                "message": "Success for add a transaction"
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
        Transaction
        .deleteOne({_id:id})
        .then( transaction => {
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
        let atransaction = {
            member: req.body.member,
            days: req.body.days,
            out_date: req.body.out_date,
            due_date: req.body.due_date,
            in_date: req.body.in_date,
            fine: req.body.fine,
            booklist: req.body.booklist
        }

        Transaction
        .updateOne({_id:id}, atransaction)
        .then( transaction => {
            res.status(200).json({
                "message": "Success for update a transaction"
            })
        })
        .catch( err => {
            res.status(500).json({
                "message": err.message,
            })
        })

        
        
    }
     
}