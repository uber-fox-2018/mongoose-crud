const Model = require('../models/Transaction')


function add(req, res) {
    let { member, days, out_date, due_date, in_date, fine, booklist } = req.body
    console.log(booklist.length);
    if(typeof booklist === string){
        

    }
    Model.create({
        member: member,
        days: days,
        out_date: out_date,
        due_date: due_date,
        in_date: in_date,
        fine: fine,
        booklist: [booklist]
    })
        .then(function (data) {
            res.status(201).json({ msg: 'new transaction added', data: data })
        })
        .catch(function (err) {
            res.status(500).json({ msg: 'add transaction failed' })
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
            res.status(201).json({ msg: 'delete transaction success' })
        })
        .catch(function (err) {
            res.status(500).json({ msg: 'delete transaction failed' })
        })
}

function update(req, res) {
    let { member, days, out_date, due_date, in_date, fine, booklist } = req.body
    Model.update(
        {
            _id: req.params.id
        },
        {
            member: member,
            days: days,
            out_date: out_date,
            due_date: due_date,
            in_date: in_date,
            fine: fine,
            booklist: [booklist]
        })
        .then(function (data) {
            res.status(201).json({ msg: 'Edit transaction success', data: data })
        })
        .catch(function (err) {
            res.status(500).json({ msg: 'Edit transaction failed' })
        })
}

module.exports = { add, readAll, readOne, remove, update }