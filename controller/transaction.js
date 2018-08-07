const Transactions = require('../models/transaction')

class Transaction{
    static Add(req,res){
        Transactions.create({
        member:req.body.member,
        days:req.body.days,
        fine:req.body.fine,
        bookList:req.body.member.bookList
    },  function(err,transaction){
            if(err) return handleError(err)
            res.status(201)
            res.json({
                message:"success added transaction",
                transaction
            })
        })
    }
    static ReadAll(req,res){
        Transactions.find({})
        .populate('member')
        .populate('bookList',"title")
        .exec(function(err,transactions){
            if(err) return handleError(err)
            res.status(200)
            res.json(transactions)
        })
    }
    static ReadOne(req,res){
        Transactions.findById(req.params.id)
        .populate('member')
        .populate('bookList',"title")
        .exec(function(err,transaction){
            if(err) return handleError(err)
            res.status(200)
            res.json(transaction)
        })
    }
    static Update(req,res){
        Transactions.findByIdAndUpdate(req.params.id,{
            member:req.body.member,
            days:req.body.days,
            fine:req.body.fine,
            bookList:req.body.member.bookList
        }, function(err,transaction){
            if(err) return handleError(err)
            res.status(201)
            res.json(transaction)            
        })
    }
    static Delete(req,res){
        Transactions.findByIdAndDelete(req.params.id,function(err,transaction){
            if(err) return handleError(err)
            res.status(201)
            res.json(transaction)    
        })
    }
}

module.exports = Transaction