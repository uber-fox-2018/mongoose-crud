let Customer = require('../models/customer')

const findAll = function(req, res) {
  Customer.find({}, function(err, customers) {
    if (err) {
      console.log(err)
      res.status(400).json({message: 'error', err})
    } else {
      console.log(customers)
      res.status(200).json(customers)
    }
  })
}

const findById = function(req, res) {
  Customer.findById(req.params.id, function(err, customer) {
    if (err) {
      console.log(err)
      res.status(400).json({message: 'error', err})
    }
    else {
      console.log(customer)
      res.status(200).json({message: 'Customer retrieved', customer})
    }
  })
}

const addCustomer = function(req, res) {
  const { name, memberid, address, zipcode, phone } = req.body
  Customer.create({
    name, memberid, address, zipcode, phone
  }, function(err, customer) {
    if (err) {
      console.log(err)
      res.status(400).json({message: 'error', err})
    } else {
      console.log(customer)
      res.status(200).json({message: 'Customer created', customer})
    }
  })
}

const updateCustomer = function(req, res) {
  const { name, address, zipcode, phone } = req.body
  Customer.updateOne({ _id: req.params.id }, {
    name, address, zipcode, phone
  }, function(err, customer) {
    if (err) {
      console.log(err)
      res.status(400).json({message: 'Error', err})
    } else {
      console.log(customer)
      res.status(200).json({message: 'Customer updated', customer})
    }
  })
}

const deleteCustomer = function(req, res) {
  Customer.findByIdAndRemove(req.params.id, function(err, customer) {
    if (err) {
      console.log(err)
      res.status(400).json({message: 'error', err})
    } else {
      console.log(customer)
      res.status(200).json({message: 'Customer deleted', customer})
    }
  })
}

module.exports = {
  findAll,
  findById,
  addCustomer,
  updateCustomer,
  deleteCustomer
}