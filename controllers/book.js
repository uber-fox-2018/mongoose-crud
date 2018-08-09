const Model = require('../models/Book')


function add(req, res) {
    let { isbn, title, author, category, stock } = req.body
    Model.create({
        isbn: isbn,
        title: title,
        author: author,
        category: category,
        stock: stock
    })
        .then(function (data) {
            res.status(201).json({ msg: 'new book added', data:data })
        })
        .catch(function (err) {
            res.status(500).json({ msg: 'add book failed' })
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
            res.status(201).json({ msg: 'delete book success' })
        })
        .catch(function (err) {
            res.status(500).json({ msg: 'delete book failed' })
        })
}

function update(req, res) {
    let { isbn, title, author, category, stock } = req.body
    Model.update(
        {
            _id: req.params.id
        },
        {
            isbn: isbn,
            title: title,
            author: author,
            category: category,
            stock: stock
        })
        .then(function (data) {
            res.status(201).json({ msg: 'Edit book success',data:data })
        })
        .catch(function (err) {
            res.status(500).json({ msg: 'Edit book failed' })
        })
}

module.exports = { add, readAll, readOne, remove, update }