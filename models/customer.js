var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var customerSchema = new Schema({
  name: String,
  memberId: String,
  address: String,
  zipcode: String,
  phone: String
});

var Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
