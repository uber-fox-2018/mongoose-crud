const Customer = require('../models/Customer')

module.exports = {
    index: (req, res) => {
        Customer
        .find()
        .then( customers => {
            res.status(200).json({
                "message": "Success for get customers",
                "data": customers
            })
        })
        .catch( err => {
            res.status(500).json({
                "message": err.message,
            })
        })
        
                
    },

    show: (req, res) => {
        let id = req.params.id
        Customer
        .findOne({_id: id})
        .then( customer => {
            res.status(200).json({
                "message": "Success for get a customer",
                "data": customer
            })
        })
        .catch( err => {
            res.status(500).json({
                "message": err.message,
            })
        })
        
        
    }, 

    create: (req, res) => {
        let newcustomer = {
            "name": req.body.name,
            "memberid": req.body.memberid,
            "address": req.body.address,
            "zipcode": req.body.zipcode,
            "phone": req.body.phone
        }

        Customer
        .create(newcustomer)
        .then( customer => {
            res.status(200).json({
                "message": "Success for add a customer",
            })
        })
        .catch( err => {
            res.status(500).json({
                "message": err.message,
            })
        })

        

    }, 

    delete: (req, res) => {
        let id = req.params.id
        Customer
        .deleteOne({_id:id})
        .then( customer => {
            res.status(200).json({
                "message": `Success for delete id: ${id}`
            })
        })
        .catch( err => {
            res.status(500).json({
                "message": err.message
            })
        })
                
    }, 

    update: (req, res) => {
        let id = req.params.id
        let acustomer = {
            "name": req.body.name,
            "memberid": req.body.memberid,
            "address": req.body.address,
            "zipcode": req.body.zipcode,
            "phone": req.body.phone
        }

        Customer
        .updateOne({_id:id}, acustomer)
        .then( customer => {
            res.status(200).json({
                "message": "Success for update a customer"
            })
        })
        .catch( err => {
            res.status(500).json({
                "message": err.message,
            })
        })

        
        
    }
     
}