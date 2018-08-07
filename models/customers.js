const mongoose = require('mongoose')

const customerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  memberId: {
    type: String,
    required: true,
  }, 
  address: {
    type: String,
    required: true   
  },
  zipcode: {
    type: String,
    required: true     
  },
  phone: {
    type: String,
    required: true   
  }
})

module.exports = mongoose.model('Customer', customerSchema)
