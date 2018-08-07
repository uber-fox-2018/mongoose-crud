const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    member: {
        type:mongoose.Schema.Types.ObjectId, ref:'Customer'
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
    booklist: [{type:mongoose.Schema.Types.ObjectId, ref:'Book'}]
}, 
{ timestamps: true })

const Transaction = mongoose.model('Transaction', transactionSchema)
module.exports = Transaction