var Customer = require('../models/customer.js')

class Controller{
    static createCustomer(req,res){
        Customer.create({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone
        },function(err,customer){
            if(err) return handleError(err)
            res.json(customer)
        })
    }

    static findAll(req,res){
        Customer.find(function(err,allData){
            if(err) return handleError(err)
            res.json(allData)
        })
    }

    static find(req,res){
        Customer.findById(req.params.id,function(err,data){
            if(err) return handleError(err)
            res.json(data)
        })
    }

    static update(req,res){
        Customer.updateOne({
            _id : req.params.id
        },{
            $set : {
                name : req.body.name,
                email : req.body.email,
                phone : req.body.phone
            }
        })
        .exec(function(err,data){
            res.json(data)
        })
    }

    static deleteData(req,res){
        Customer.deleteOne({
            _id : req.params.id
        },function(err,data){
            if(err) return handleError(err)
            res.json(data)
        })
    }
}

module.exports = Controller