var mongoose = require('mongoose');

var transactionSchema = new mongoose.Schema({
    member: {type: mongoose.Schema.ObjectId, ref: 'Customer'},
    days: Number,
    out_date: {type: Date, default: new Date},
    due_date: {type: Date, default: new Date},
    in_date: {type: Date, default: new Date},
    fine: Number,
    booklist: [{type: mongoose.Schema.ObjectId, ref: 'Book'}]
})

var Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction