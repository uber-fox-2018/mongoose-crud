const mongoose = require('mongoose')
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

const TransactionSchema = new Schema({
    member : {type: Schema.Types.ObjectId, ref: 'Customers'},
    days: Number,
    outDate: {type: Date, default: Date.now},
    dueDate: {type: Date, default: Date.now},
    inDate : {type: Date, default: Date.now},
    fine : Number,
    booklist : [{type: Schema.Types.ObjectId, ref: 'Books'}]
})

const transaction = mongoose.model('Transactions', TransactionSchema)

module.exports = transaction