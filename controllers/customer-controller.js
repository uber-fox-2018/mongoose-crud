const Customer = require('../model/customer')
const ObjectId = require('mongodb').ObjectID

const addCustomer = (req,res) => {
    const { name, memberid, address, zipcode, phone} = req.body
      Customer.create({
        name: name,
        memberid: memberid,
        address: address,
        zipcode: zipcode,
        phone: phone
    })
    .then((data) => {
        res.status(201).json({
            message: `Successfully create a customer`,
            data: data
        })
    })
    .catch((err) => {
        res.status(400).json({
            message: err.message
        })
    })
}

const readCustomer = (req,res) => {
    Customer.find()
        .then((data_customers) => {
            res.status(200).json({
                msg: `Customers Data`,
                data: data_customers
            })
        })
        .catch((err) => {
            res.status(400).json({
                msg: err.message
            })
        })
}

const removeCustomer = (req,res) => {
    Customer.deleteOne({_id: ObjectId(req.params.id)})
    .then(() => {
        res.status(201).json({
            msg: `Succesfully deleted`
        })
    })
    .catch((err) => {
        res.status(400).json({
            msg: err.message
        })
    })
}

const updateCustomer = (req,res) => {
    const { name, memberid, address, zipcode, phone} = req.body
    Customer.findOneAndUpdate({_id: ObjectId(req.params.id)}, {$set:{name:name, memberid: memberid, address: address, zipcode: zipcode, phone: phone}})
    .then(() => {
        res.status(201).json({
            msg: `data succesfully updated`
        })
    })
    .catch((err) => {
        res.status(400).json({
            msg: err.message
        })
    })
}

module.exports = {
    addCustomer,
    readCustomer,
    removeCustomer,
    updateCustomer
}