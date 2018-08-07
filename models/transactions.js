const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const transactionsSchema = new Schema({
    member: String,
    days: Number,
    out_date: String,
    due_date: String,
    in_date: String,
    fine: Number,
    booklist: []
})

var Transactions = mongoose.model('Transcations', transactionsSchema)

module.exports = Transactions