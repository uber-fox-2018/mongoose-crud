const mongoose = require('mongoose')
    mongoose.connect('mongodb://localhost:27017/library');

const Customer = require('../models/customer.js')

class Customers{
    static findAll(req,res){
        Customer.find({}, function(err, customers){
            if(err){
                res.status(500).json(err.message)
            }
            res.status(200).json({message: "List of books", customers: customers})
        })
    }

    static findOne(req,res){
        Customer.findById(req.params.id, function(err, customer){
            if(err){res.status(500).json(err.message)}
            res.status(200).json(customer)
        })
    }

    static create(req,res){
        Customer.create({
            name: req.body.name,
            memberid: req.body.memberid,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone:req.body.phone
        }, function(err, success){
            if(err){res.status(500).json(err.message)}
            res.status(200).json('Customer data added!')
        })
    }

    static update(req,res){
        Customer.updateOne({_id: req.params.id},{
            name: req.body.name,
            memberid: req.body.memberid,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone:req.body.phone
        }, function(err, success){
            if(err){res.status(500).json(err.message)}
            res.status(200).json('Customer data already updated')
        })
    }

    static delete(req,res){
        Customer.deleteOne({_id: req.params.id}, function(err,success){
            if(err){res.status(500).json(err.message)}
            res.status(200).json('Customer data already deleted')
        })
    }
}

module.exports = Customers