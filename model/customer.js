var mongoose = require('mongoose');
 
var customerSchema = mongoose.Schema({
    name : String,
    memberid : String,
    address : String,
    zipcode : Number,
    phone : String,
    },{
    timestamps: true
  });

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer
 