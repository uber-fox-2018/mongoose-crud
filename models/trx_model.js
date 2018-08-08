const mongoose = require('mongoose')
const Schema = mongoose.Schema

const trxSchema = new Schema ({
    member: { type: String, ref: 'Customer' },
    days: { type: String },
    out_date: { type: String },
    due_date: { type: String },
    in_date: { type: String },
    fine: { type: Number },
    booklist: { type: Array, ref: "Book" }
})

const Transaction = mongoose.model('Transaction', trxSchema)

module.exports = Transaction