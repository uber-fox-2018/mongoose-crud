const Customer = require('../models/customer')

class CustomersController {
  static getCustomers(req, res){
    Customer.find({}, function(err, customers){
      res.status(200).json(customers)
    });
  }
  static getOneCustomer(req, res){
    Customer.findById(req.params.id, function (err, customer) {
      res.status(200).json(customer)
    });
  }
  static addOneCustomer(req,res){
    Customer.create({
      name: req.body.name,
  		memberid: req.body.memberid,
  		address: req.body.address,
  		zipcode: req.body.zipcode,
  		phone: req.body.phone
     }, function (err, small) {
      if (err) return handleError(err);
      // console.log(small);
      res.status(200).json(small)
    });
  }
  static addManyCustomer(req, res){
    // console.log(req.body);
    Customer.insertMany(req.body, function(err) {
      res.status(200).json('customer(s) sucessfully added')
    });
  }
  static deleteCustomer(req, res){
    Customer.deleteOne({ _id: req.params.id }, function (err){
      res.status(200).json('customer sucessfully deleted')
    });
  }
  static updateCustomer(req, res){
    Customer.updateOne({ _id: req.params.id }, {
      name: req.body.name,
  		memberid: req.body.memberid,
  		address: req.body.address,
  		zipcode: req.body.zipcode,
  		phone: req.body.phone
    }, function(err, customer) {
      res.status(200).json('customer sucessfully updated')
    });
  }
}

module.exports = CustomersController
