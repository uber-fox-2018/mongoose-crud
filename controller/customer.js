const Customers = require('../models/customer')

class Customer{
    static Add(req,res){
        Customers.create({
            name: req.body.name,
            memberId: req.body.memberId,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
    },  function(err,customer){
            if(err) return handleError(err)
            res.status(201)
            res.json({
                message:"success added customer",
                customer
            })
        })
    }
    static ReadAll(req,res){
        Customers.find({},function(err,customers){
            if(err) return handleError(err)
            res.status(200)
            res.json(customers)
        })
    }
    static ReadOne(req,res){
        Customers.findById(req.params.id,function(err,book){
            if(err) return handleError(err)
            res.status(200)
            res.json(book)
        })
    }
    static Update(req,res){
        Customers.findByIdAndUpdate(req.params.id,{
            name: req.body.name,
            memberId: req.body.memberId,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
        }, function(err,customer){
            if(err) return handleError(err)
            res.status(201)
            res.json(customer)            
        })
    }
    static Delete(req,res){
        Customers.findByIdAndDelete(req.params.id,function(err,customer){
            if(err) return handleError(err)
            res.status(201)
            res.json(customer)    
        })
    }
}

module.exports = Customer