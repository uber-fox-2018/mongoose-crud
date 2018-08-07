const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Customers = require('../models/customers')
const Books = require('../models/books')

const transactionsSchema = new Schema({
    member: {type: mongoose.Schema.Types.ObjectId, ref: "Customers"},
    days: Number,
    out_date: Date,
    due_date: Date,
    in_date: Date,
    fine: Number,
    booklist: [
        {type: mongoose.Schema.Types.ObjectId, ref: "Books"}
    ]
})

var Transactions = mongoose.model('Transcations', transactionsSchema)

module.exports = Transactions