const Customers = require('../models/customers')

var insertCustomer = (req, res) => {
    Customers.create({
        name: req.body.name,
        memberid: req.body.memberid,
        address: req.body.address,
        zipcode: req.body.zipcode,
        phone: req.body.phone
    })
    .then(() => {
        res.status(201).json({
            msg: 'create success'
        })
    }).catch((err) => {
        res.status(500).json({
            msg: err.message
        })
    });
}

var deleteCustomer = (req, res) => {
    let id = req.params.id
    Customers.remove({_id: id})
    .then(() => {
        res.status(200).json({
            msg: `Delete customer with id: ${id}`
        })
    }).catch((err) => {
        res.status(500).json({
            msg: err.message
        })
    });
}

var updateCustomer = (req, res) => {
    let id = req.params.id
    Customers.update({_id: id},
       { $set: {
        name: req.body.name,
        memberid: req.body.memberid,
        address: req.body.address,
        zipcode: req.body.zipcode,
        phone: req.body.phone
        }}
    )
    .then(() => {
        res.status(200).json({
            msg: `Update customer with id : ${id}`
        })
    }).catch((err) => {
        res.status(500).json({
            msg: err.message
        })
    });
}

var getCustomer = (req, res) => {
    Customers.find()
    .then((result) => {
        res.status(200).json({
            msg: "Data all customers",
            result
        })
    }).catch((err) => {
        res.status(500).json({
            msg: err.message
        })
    });
}

module.exports = {
    insertCustomer,
    deleteCustomer,
    updateCustomer,
    getCustomer
}