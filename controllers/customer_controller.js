const Customer = require('../models/customers');

module.exports = {
    insert: (req,res)=>{
        Customer.create(req.body)
        .then((newCustomer) => {
            res.status(201).json({
                msg: 'data created',
                newCustomer
            })
        })

        .catch((err) => {
            res.status(500).json({
                msg: 'create failed',
            })
        });
    },

    read: (req,res)=>{
        Customer.find({})
        .then((customers) => {
            res.status(201).json({
                msg: 'data found',
                customers
            })
        })
        .catch((err) => {
            res.status(500).json({
                msg: 'data not found',
            })
        });
    },

    update: (req,res) =>{
        Customer.updateOne({_id : req.params.id},{name : req.body.name})
        .then((updated) => {
            res.status(201).json({
                msg: 'data updated',
                updated
            })
        })
        .catch((err) => {
            res.status(500).json({
                msg: 'update failed',
            })
        });
    },

    remove: (req,res)=>{
        Customer.deleteOne({_id : req.params.id})
        .then((deleted) => {
            res.status(201).json({
                msg: 'data deleted',
                deleted
            })
        })
        .catch((err) => {
            res.status(500).json({
                msg: 'delete failed',
            })
        });
    }
};
