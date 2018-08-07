var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionSchema = new Schema({
  member: {
    type: Schema.Types.ObjectId,
    ref: 'Customer'
  },
  days: {
    type: Number,
    require: true
  },
  out_date: {
    type: Date,
    require: true,
    default: Date.now
  },
  due_date: {
    type: Date,
    require: true,
    default: Date.now
  },
  fine: {
    type: Number
  },
  booklist: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }]
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction
