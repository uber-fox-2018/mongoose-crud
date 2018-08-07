const Customer = require('../models/Customer');

module.exports = {
    add : (req,res)=>{
        const {name, memberid, address, zipcode, phone} = req.body
        Customer.create({name, memberid, address, zipcode, phone})
            .then(newCustomer=>{
                res.status(201).json(newCustomer)
            })
            .catch(err=>{
                res.status(500).json({msg:err})
            })
    }, 
    
    getAll : (req,res)=>{
        Customer.find()
            .then(customers=>{
                res.status(200).json(customers)
            })
            .catch(err=>{
                res.status(500).json({msg:err})
            })
    }, 
    
    getOne: (req,res)=>{
        Customer.findById(req.params.id)
            .then(customer=>{
                res.status(200).json(customer)
            })
            .catch(err=>{
                res.status(500).json({msg:err})
            })
    }, 
    
    update: (req,res)=>{
        Customer.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
            .then(updatedCustomer=>{
                res.status(200).json(updatedCustomer)
            })
            .catch(err=>{
                res.status(500).json({msg:err})
            })
    },
    
    remove: (req,res)=>{
        Customer.remove({_id: req.params.id})
            .then(()=>{
                res.status(200).json({message: 'We deleted it!'});
            })
            .catch(err=>{
                res.status(500).json({msg:err})
            })
    }
}
