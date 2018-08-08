const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Customer = require("../models/costumer")
const Book = require('../models/books')


const transactionSchema =  new Schema({
    member: 
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Customer"
        },
    days: Number,
    out_date: Date,
    due_date: Date,
    in_date: Date,
    fine: Number,
    booklist:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Book"

    }]   
},
{
    timestamps: true
})

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction