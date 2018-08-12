const mongoose = require('mongoose')
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const CustomerSchema = new Schema({
    name: String,
    memberId: String,
    address: String,
    zipcode: String,
    phone : String
})

const customer = mongoose.model('Customers', CustomerSchema)

module.exports = customer