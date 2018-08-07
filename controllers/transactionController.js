let Transaction = require('../models/transaction')

const findAll = function(req, res) {
  Transaction.find({})
    .populate('member')
    .populate('booklist')
    .exec(function(err, transactions) {
    if (err) {
      console.log(err)
      res.status(400).json({message: 'error', err})
    } else {
      console.log(transactions)
      res.status(200).json({message: 'Success', transactions})
    }
  })
}

const findById = function(req, res) {
  Transaction.findById(req.params.id)
    .populate('member')
    .populate('booklist')
    .exec(function(err, transaction) {
      if (err) {
        console.log(err)
        res.status(400).json({message: 'error', err})
      } else {
        console.log(transaction)
        res.status(200).json({message: 'Success', transaction})
      }
    })
}

const addTransaction = function(req, res) {
  const { member, days, outDate, dueDate, inDate, fine, booklist } = req.body

  Transaction.create({
    member, days, outDate, dueDate, inDate, fine,
    booklist
  }, function(err, transaction) {
    if (err) {
      console.log(err)
      res.status(400).json({message: 'error', err})
    } else {
      console.log(transaction)
      res.status(200).json({message: 'Transaction created', transaction})
    }
  })
}

module.exports = {
  findAll,
  findById,
  addTransaction
}