var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  memberid: {
    type: String,
    unique: true,
    require: true
  },
  addess: {
    type: String,
    require: true
  },
  zipcode: {
    type: String,
    require: true
  },
  phone: {
    type: String,
    require: true
  },
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer
