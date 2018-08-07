const Transaction = require('../models/transaction')

class TransactionsController {
  static getTransactions(req, res){
    Transaction.find().populate('member').populate('booklist')
    .exec(function(err, transactions){
      res.status(200).json(transactions)
    })
  }
  static getOneTransaction(req, res){
    Transaction.findOne({_id:req.params.id}).populate('member').populate('booklist')
    .exec(function(err, transactions){
      res.status(200).json(transactions)
    })
  }
  static addOneTransaction(req,res){
    Transaction.create({
      member: req.body.member,
      days: req.body.days,
      out_date: new Date(req.body.out_date),
      due_date: new Date(req.body.due_date),
      in_date: new Date(req.body.in_date),
      fine: req.body.fine,
      booklist: req.body.booklist
     }, function (err, small) {
      if (err) return handleError(err);
      // console.log(small);
      res.status(200).json(small)
    });
  }
  static addManyTransaction(req, res){
    // console.log(req.body);
    Transaction.insertMany(req.body, function(err) {
      res.status(200).json('transaction(s) sucessfully added')
    });
  }
  static deleteTransaction(req, res){
    Transaction.deleteOne({ _id: req.params.id }, function (err){
      res.status(200).json('transaction sucessfully deleted')
    });
  }
  static updateTransaction(req, res){
    Transaction.updateOne({ _id: req.params.id }, {
      member: req.body.member,
      days: req.body.days,
      out_date: req.body.out_date,
      due_date: req.body.due_date,
      in_date: req.body.in_date,
      fine: req.body.fine,
      booklist: req.body.booklist
    }, function(err, transaction) {
      res.status(200).json('transaction sucessfully updated')
    });
  }
}

module.exports = TransactionsController
