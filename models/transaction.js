const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost:27017/db_mangoose',{ useNewUrlParser: true});

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const Transaction = new Schema({
    member: { type: Schema.Types.ObjectId, ref: 'Customer' },
    days: Number,
    out_date: { type: Date, default: Date.now },
    due_date: { type: Date, default: Date.now },
    in_date: { type: Date, default: Date.now },
    fine: String,
    bookList: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
});

const TransactionsModel = mongoose.model('Transaction', Transaction);

module.exports = TransactionsModel
