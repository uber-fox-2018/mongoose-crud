const mongoose = require('mongoose');
const Customer = require('../model/customer');
class CustomerController {
  
  static getAllCustomers(req, res) {
    mongoose.connect('mongodb://localhost/mongoose_crud', function (err) {
      if (err) {
        res.status(500)
        res.json({message : "internal server error"})
      } else {
        Customer.find(function (err,customers) {
          if (err) {
            res.status(500)
               .json({message : "internal server error"})
          } else {
            res.status(200)
               .json({message : "find all customers succeed" , result : customers})
          }
        })
      }
    })
  }

  static getOneCustomer(req, res) {
    mongoose.connect('mongodb://localhost/mongoose_crud', function (err) {
      if (err) {
        res.status(500)
        res.json({message : "internal server error"})
      } else {
        var query  = Customer.where({ _id: req.params.id })
        query.findOne(function (err, customer) {
          if (err) {
            res.status(500)
               .json({message : "internal server error"})
          } else {
            if (customer == null) {
              res.status(404)
              res.json({message : "no customer found" })
            } else {
              res.status(200)
              res.json({message : "find customer succeed" , result : customer})
            }
          }
        })
      }
    })
  }
  
  static createCustomer(req,res) {
    mongoose.connect('mongodb://localhost/mongoose_crud', function (err) {
      if (err) {
        res.status(500)
        res.json({message : "internal server error"})
      } else {
        let newCustomer = {
          name : req.body.name,
          memberid : req.body.memberid,
          address : req.body.address,
          zipcode : req.body.zipcode,
          phone : req.body.phone
        }
        Customer.create(newCustomer, function (err, customer) {
          if (err) {
            res.status(500)
            res.json({message : "internal server error"})
          } else {
            res.status(200)
               .json({message : "customer successfully created", result : customer})
          }
        })
      }
    })
  }

  static deleteCustomer(req,res) {
    mongoose.connect('mongodb://localhost/mongoose_crud', function (err) {
      if (err) {
        res.status(500)
        res.json({message : "internal server error"})
      } else {
        Customer.remove({ _id: req.params.id },function (err, customer) {
          if (err) {
            res.status(500)
               .json({message : "internal server error"})
          } else {
            if (customer.n == 0) {
              res.status(404)
                 .json({message : "no customer found" })
            } else {
              res.status(200)
                 .json({message : "delete customer succeed" , result : customer})
            }
           
          }
        })
      }
    })
  } 

  static updateCustomer(req,res) {
    mongoose.connect('mongodb://localhost/mongoose_crud', function (err) {
      if (err) {
        res.status(500)
        res.json({message : "internal server error"})
      } else {
        var query  = Customer.where({ _id: req.params.id })
        query.update(req.body,function (err, customer) {
          if (err) {
            res.status(500)
               .json({message : "internal server error"})
          } else {
            if (customer.n == 0) {
              res.status(404)
                 .json({message : "no customer found" })
            } else {
              res.status(200)
                 .json({message : "update customer succeed" , result : customer})
            }
           
          }
        })
      }
    })
  }
}


module.exports = CustomerController
