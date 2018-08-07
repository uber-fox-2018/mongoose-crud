const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    member: {
        type: String,
        required: true
    }, 
    days: {
        type: Number
    },
    out_date: {
        type: Date
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
    booklist: {
        type: Array
    }
}, 
{ timestamps: true })

const Transaction = mongoose.model('Transaction', transactionSchema)
module.exports = Transaction