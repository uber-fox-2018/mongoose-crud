const Transaction = require('../model/transaction')
const ObjectId = require('mongodb').ObjectID

const addTransaction = (req,res) => {
    const { member, days, out_date, in_date, fine, booklist } = req.body
      Transaction.create({
        member: member,
        days: days,
        out_date: out_date,
        in_date: in_date,
        fine: fine,
        booklist: [booklist]
    })
    .then((data) => {
        res.status(201).json({
            message: `Successfully create a transaction`,
            data: data
        })
    })
    .catch((err) => {
        res.status(400).json({
            message: err.message
        })
    })
}

const readTransaction = (req,res) => {
    Transaction.find()
        .populate('member')
        .populate('booklist')
        .then((data_transaction) => {
            res.status(200).json({
                msg: `Transaction Data`,
                data: data_transaction
            })
        })
        .catch((err) => {
            res.status(400).json({
                msg: err.message
            })
        })
}

const removeTransaction = (req,res) => {
    Transaction.deleteOne({_id: ObjectId(req.params.id)})
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

const updateTransaction = (req,res) => {
    const { booklist } = req.body
    Transaction.findOneAndUpdate({_id: ObjectId(req.params.id)}, {$push: {booklist: booklist}})
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
    removeTransaction,
    readTransaction,
    addTransaction,
    updateTransaction
}