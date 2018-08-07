const Transaction = require('../models/transaction')

module.exports = {
  addTransaction: (req, res) => {
    Transaction.create({
      member: req.body.member,
      days: req.body.days,
      out_date: req.body.out_date,
      due_date: req.body.due_date,
      in_date: req.body.in_date,
      fine: req.body.fine,
      bookList: [req.body.bookList]
    })
      .then(newTransaction => {
        res.status(200).json({
          message: "Add new transaction success",
          newTransaction
        })
      })
      .catch(err => {
        res.status(500).json({
          error: err.message
        })
      })
  },

  getTransaction: (req, res) => {
    Transaction.find({})
      .populate('member', 'name')
      .populate('bookList', 'title')
      .then(allTransaction => {
        res.status(200).json({
          message: "Get all transaction",
          allTransaction
        })
      })
      .catch(err => {
        res.status(500).json({
          error: err.message
        })
      })
  },

  deleteTransaction: (req, res) => {
    Transaction.deleteOne({ _id: req.params.id })
     .then(transactionDelete => {
       res.status(200).json({
         message: "Delete transaction success",
         transactionDelete
       })
     })
     .catch(err => {
      res.status(500).json({
        error: err.message
      })
    }) 
  }
}