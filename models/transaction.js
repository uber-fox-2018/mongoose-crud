const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var transactionSchema = new Schema({
    member: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'Customer'
    },
    days: {
        type: Number,
        require: true
    },
    out_date: {
        type: Date,
        require: true
    },
    due_date: {
        type: Date,
        require: true
    },
    in_date: {
        type: Date,
        require: true
    },
    fine: {
        type: Number,
        require: true
    },
    booklist: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }]
}, {
        timestamps: true
});

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;