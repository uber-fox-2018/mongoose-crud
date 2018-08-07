const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {
        type : String
    },
    memberid : {
        type: String,
    },
    address : {
        type: String,
    },
    zipcode : {
        type: String,
    },
    phone : {
        type: String,
    },
}, {timestamps:true});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;