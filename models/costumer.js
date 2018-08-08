const mongoose = require('mongoose')
const Schema = mongoose.Schema


const costumerSchema =  new Schema({
    name: String,
    memberid: String,
    address: String,
    zipcode: String,
    phone: Number,   
},
{
    timestamps: true
})

const Costumer = mongoose.model('Costumer', costumerSchema)

module.exports = Costumer