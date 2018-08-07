const Customer = require('../models/customers') 

class Customers{
    static createCustomer(req, res, next){
        var {name, memberId, address, zipcode, phone} = req.body
        Customer.create({name, memberId, address, zipcode, phone}, (err, customer) => {
            if(err) return next(err)
            res.json(customer)
        })
    }

    static readCustomers(req, res, next){
        Customer.find({}, (err, customers) => {
            if(err) return next(err)
            res.json(customers)
        })
    }

    static readOneCustomer(req, res, next){
        Customer.findById({_id: req.params.id}, (err, customer) => {
            if(err) return next(err)
            res.json(customer)
        })
    }

    static updateCustomer(req, res, next){
        var {name, memberId, address, zipcode, phone} = req.body
        Customer.update({_id : req.params.id}, {$set : {
            name, memberId, address, zipcode, phone
        }})
        .exec((err, result) => {
            if(err) return next(err)
            res.json(result)
        })
    }

    static deleteCustomer(req, res, next){
        Customer.deleteOne({_id : req.params.id}, (err) => {
            if(err) return next(err)
            res.json(`Successfully deleted customer id ${req.params.id}`)
        })
    }

}

module.exports = Customers
