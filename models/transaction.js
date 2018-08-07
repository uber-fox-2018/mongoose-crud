const mongoose = require('mongoose');
const Schema = mongoose.Schema

let transactionSchema = new Schema({
    member: { type: Schema.Types.ObjectId, ref: 'Customer' },
    days : {type: Number},
    out_date: {type : Date},
    due_date: {type : Date},
    in_date: {type : Date},
    fine: {type : Number},
    booklist: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
})

let Transaction = mongoose.model('Transaction',transactionSchema)
module.exports = Transaction