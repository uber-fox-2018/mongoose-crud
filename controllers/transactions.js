const Transaction = require('../models/transactions')
const mongoose = require('mongoose')

class Transactions{
    static addTransaction(req, res, next){
        var {member, days, fine, booklist} = req.body
        Transaction.create({member, days, fine, booklist}, (err, result) => {
                    if(err) return next(err)
                    res.json(result)
        })
    }

    static readTransactions(req, res, next){
        Transaction.find({})
        .populate('member', 'member._id') // member got from the transaction model which reference to Customers model
        .populate('booklist', 'booklist._id') // // booklist got from the transaction model which reference to Customers model
        .exec(function(err, result){
            res.json(result)
        })
    }

    static readOneTransaction(req, res, next){
        Transaction.findById({_id: req.params.id})
        .populate('member', 'member._id')
        .populate('booklist', 'booklist._id')
        .exec(function(err, result){
            res.json(result)
        })
    } 

    static updateTransaction(req, res, next){
        var {member, days, fine, booklist} = req.body
        Transaction.update({_id: req.params.id}, {$set: {
                    member, days, fine, booklist}})
                    .exec((err, result) => {
                        if(err) return next(err)
                        res.json(result)
                    })
    }

    static deleteTransaction(req, res, next){
        Transaction.deleteOne({_id: req.params.id}, (err) => {
            if(err) return next(err)
            res.json(`Successfully delete id ${req.params.id}`)
        })
    }
    
}

module.exports = Transactions
