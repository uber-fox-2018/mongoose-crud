var mongoose = require('mongoose');
 
var transactionSchema = mongoose.Schema({
    member: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Customer'
    },
    days: Number,
    out_date: { 
        type: Date,
        default: Date.now
    },
    due_date: { 
        type: Date,
        default: Date.now
    },
    in_date : { 
        type: Date,
        default: Date.now
    },
    fine : Number,
    booklist : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }],
    },{
    timestamps: true
  });
 
var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction
 