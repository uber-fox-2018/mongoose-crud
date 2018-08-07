const mongoose = require('mongoose')
    mongoose.connect('mongodb://localhost:27017/library');

const Transaction = require('../models/transaction.js')

class Transactions{
    static findAll(req,res){
        Transaction.find({})
        .populate('member')
        .populate('booklist')
        .exec(function(err, transactions){
            if(err){res.status(500).json(err.message)}
            res.status(200).json(transactions)
        })
    }

    static findOne(req,res){
        Transaction.findOne({_id: req.params.id})
        .populate('member')
        .populate('booklist')
        .exec(function(err,transaction){
            if(err){res.status(500).json(err.message)}
            res.status(200).json(transaction)
        })
    }

    static create(req,res){
        Transaction.create({
            member: req.body.member,
            days: req.body.days,
            out_date: new Date(),
            due_date: new Date(req.body.due_date),
            in_date:  new Date(req.body.in_date),
            fine: req.body.fine,
            booklist: req.body.booklist
        }, function(err, success){
            if(err){res.status(500).json(err.message)}
            res.status(200).json('transaction added!')
        })
        
    }

    static edit(req,res){
        Transaction.updateOne({_id: req.params.id},{
            member: req.body.member,
            days: req.body.days,
            out_date: new Date(),
            due_date: new Date(req.body.due_date),
            in_date:  new Date(req.body.in_date),
            fine: req.body.fine,
            booklist: req.body.booklist
        }, function(err, success){
            if(err){res.status(500).json(err.message)}
            res.status(200).json('Transaction data already updated')
        })
    }

    static delete(req,res){
        Transaction.deleteOne({_id: req.params.id}, function(err,success){
            if(err){res.status(500).json(err.message)}
            res.status(200).json('Customer data already deleted')
        })
    }

}

module.exports = Transactions