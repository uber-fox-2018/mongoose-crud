const mongoose = require('mongoose');
const Transaction = require('../model/transaction');
class TransactionController {
  
  static getAllTransactions(req, res) {
    mongoose.connect('mongodb://localhost/mongoose_crud', function (err) {
      if (err) {
        res.status(500)
        res.json({message : "internal server error"})
      } else {
        Transaction.find().populate('member').populate('booklist').exec(function (err,transactions) {
          if (err) {
            res.status(500)
               .json({message : "internal server error"})
          } else {
            res.status(200)
               .json({message : "find all transactions succeed" , result : transactions})
          }
        })
      }
    })
  }

  static getOneTransaction(req, res) {
    mongoose.connect('mongodb://localhost/mongoose_crud', function (err) {
      if (err) {
        res.status(500)
        res.json({message : "internal server error"})
      } else {
        var query  = Transaction.where({ _id: req.params.id })
        query.findOne().populate('member').populate('booklist').exec(function (err, transaction) {
          if (err) {
            res.status(500)
               .json({message : "internal server error"})
          } else {
            if (transaction == null) {
              res.status(404)
              res.json({message : "no transaction found" })
            } else {
              res.status(200)
              res.json({message : "find transaction succeed" , result : transaction})
            }
          }
        })
      }
    })
  }
  
  static createTransaction(req,res) {
    mongoose.connect('mongodb://localhost/mongoose_crud', function (err) {
      if (err) {
        res.status(500)
        res.json({message : "internal server error"})
      } else {
        let newTransaction = {
          member: req.body.member,
          days: req.body.days,
          out_date: new Date (req.body.out_date),
          due_date: new Date (req.body.due_date),
          in_date: new Date (req.body.in_date),
          fine: req.body.fine,
          booklist : req.body.booklist
        }
        Transaction.create(newTransaction, function (err, transaction) {
          if (err) {
            res.status(500)
            res.json({message : "internal server error"})
          } else {
            res.status(200)
               .json({message : "transaction successfully created", result : transaction})
          }
        })
      }
    })
  }

  static deleteTransaction(req,res) {
    mongoose.connect('mongodb://localhost/mongoose_crud', function (err) {
      if (err) {
        res.status(500)
        res.json({message : "internal server error"})
      } else {
        Transaction.remove({ _id: req.params.id },function (err, transaction) {
          if (err) {
            res.status(500)
               .json({message : "internal server error"})
          } else {
            if (transaction.n == 0) {
              res.status(404)
                 .json({message : "no transaction found" })
            } else {
              res.status(200)
                 .json({message : "delete transaction succeed" , result : transaction})
            }
           
          }
        })
      }
    })
  } 

  static updateTransaction(req,res) {
    mongoose.connect('mongodb://localhost/mongoose_crud', function (err) {
      if (err) {
        res.status(500)
        res.json({message : "internal server error"})
      } else {
        var query  = Transaction.where({ _id: req.params.id })
        query.update(req.body,function (err, transaction) {
          if (err) {
            res.status(500)
               .json({message : "internal server error"})
          } else {
            if (transaction.n == 0) {
              res.status(404)
                 .json({message : "no transaction found" })
            } else {
              res.status(200)
                 .json({message : "update transaction succeed" , result : transaction})
            }
           
          }
        })
      }
    })
  }
}


module.exports = TransactionController
