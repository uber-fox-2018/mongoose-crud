const Transactions = require('../models/transactions')

var insertTransaction = (req, res) => {
    Transactions.create({
        member: req.body.member,
        days: req.body.days,
        out_date: req.body.out_date,
        due_date: req.body.due_date,
        in_date: req.body.in_date,
        fine: req.body.fine,
        booklist: []
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

var deleteTransaction = (req, res) => {
    let id = req.params.id
    Transactions.remove({_id: id})
    .then(() => {
        res.status(200).json({
            msg: `Delete transaction with id: ${id}`
        })
    }).catch((err) => {
        res.status(500).json({
            msg: err.message
        })
    });
}

var updateTransaction = (req, res) => {
    let id = req.params.id
    Customers.update({_id: id},
       { $set: {
        member: req.body.member,
        days: req.body.days,
        out_date: req.body.out_date,
        due_date: req.body.due_date,
        in_date: req.body.in_date,
        fine: req.body.fine,
        },
        $push: {booklist: req.body.booklist}
    }
    )
    .then(() => {
        res.status(200).json({
            msg: `Update transaction with id : ${id}`
        })
    }).catch((err) => {
        res.status(500).json({
            msg: err.message
        })
    });
}

var getTransaction = (req, res) => {
    Customers.find()
    .then((result) => {
        res.status(200).json({
            msg: "Data all transaction",
            result
        })
    }).catch((err) => {
        res.status(500).json({
            msg: err.message
        })
    });
}

module.exports = {
    insertTransaction,
    deleteTransaction,
    updateTransaction,
    getTransaction
}