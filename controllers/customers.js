const Customer = require('../models/customers')

module.exports = {
  addCustomer: (req, res) => {
    Customer.create({
      name: req.body.name,
      memberId: req.body.memberId,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    })
      .then(newCustomer => {
        res.status(200).json({
          message: "Save data new customer",
          newCustomer
        })
      })
      .catch(err => {
        res.status(500).json({
          error: err.message
        })
      })

  },

  getCustomer: (req, res) => {
    Customer.find({})
      .then(getAllCustomer => {
        res.status(200).json({
          message: "Get All Customer Success"
        })
      })
      .catch(err => {
        res.status(500).json({
          error: err.message
        })
      })
  },

  updateCustomer: (req, res) => {
    
  },

  deleteCustomer: (req, res) => {
    
  }
}