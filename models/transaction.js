const mongoose = require('mongoose')

const transactionSchema = mongoose.Schema({
  member: {
    type: mongoose.Schema.Types.ObjectId
  },
  days: {
    type: Number
  }, 
  out_date: {
    type: Date,
    default: Date.now
  },
  due_date: {
    type: Date
  },
  in_date: {
    type: Date
  },
  fine: {
    type: Number
  },
  bookList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  }]
})

module.exports = mongoose.model('Transaction', transactionSchema)