const Model = require('../models/Customer')


function add(req, res) {
    let { name, memberid, address, zipcode, phone } = req.body
    Model.create({
        name: name,
        memberid: memberid,
        address: address,
        zipcode: zipcode,
        phone: phone
    })
        .then(function (data) {
            res.status(201).json({ msg: 'new customer added', data: data })
        })
        .catch(function (err) {
            res.status(500).json({ msg: 'add customer failed' })
        })
}

function readAll(req, res) {
    Model.find({})
        .then(function (data) {
            res.status(200).json({ msg: 'data found', data: data })
        })
        .catch(function (err) {
            res.status(500).json({ msg: err.message })
        })
}

function readOne(req, res) {
    Model.findOne({ _id: req.params.id })
        .then(function (data) {
            res.status(200).json({ msg: 'data found', data: data })
        })
        .catch(function (err) {
            res.status(500).json({ msg: err.message })
        })
}

function remove(req, res) {
    Model.remove({ _id: req.params.id })
        .then(function (data) {
            res.status(201).json({ msg: 'delete customer success' })
        })
        .catch(function (err) {
            res.status(500).json({ msg: 'delete customer failed' })
        })
}

function update(req, res) {
    let { name, memberid, address, zipcode, phone } = req.body
    Model.update(
        {
            _id: req.params.id
        },
        {
            name: name,
            memberid: memberid,
            address: address,
            zipcode: zipcode,
            phone: phone
        })
        .then(function (data) {
            res.status(201).json({ msg: 'Edit customer success', data: data })
        })
        .catch(function (err) {
            res.status(500).json({ msg: 'Edit customer failed' })
        })
}

module.exports = { add, readAll, readOne, remove, update }