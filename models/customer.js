const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost:27017/db_mangoose',{ useNewUrlParser: true});

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const Customer = new Schema({
    name: String,
    memberId: String,
    address: String,
    zipcode: String,
    phone: String
});

const CustomersModel = mongoose.model('Customer', Customer);

module.exports = CustomersModel
