const mongoose = require('mongoose');;
const Schema = mongoose.Schema;

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
    address: {
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
}, {
    timestamps: true
});

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;