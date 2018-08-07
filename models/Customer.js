const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    memberid: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String
    },
    zipcode: {
        type: String
    },
    phone: {
        type: String
    }
}, 
{ timestamps: true })

const Customer = mongoose.model('Customer', customerSchema)
module.exports = Customer