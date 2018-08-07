const mongoose = require('mongoose')
const Schema = mongoose.Schema

let transactionSchema = new Schema({
  member: {
    type: Schema.Types.ObjectId,
    ref: 'customers'
  },
  days: Number,
  outDate: Date,
  dueDate: Date,
  inDate: Date,
  fine: Number,
  booklist: [{
    type: Schema.Types.ObjectId,
    ref: 'books'
  }]
})

let Transaction = mongoose.model('transactions', transactionSchema)
module.exports = Transaction