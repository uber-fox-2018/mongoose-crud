var mongoose = require('mongoose')

var Schema = mongoose.Schema
var blogCustomer = new Schema({
    name : String,
    email : String,
    phone : String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
})

var customer = mongoose.model('customer',blogCustomer)

module.exports = customer