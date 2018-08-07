const Transaction = require('../models/transaction');

module.exports = {

    insertSeedTransactions: (req, res) => {
        Transaction.insertMany([{
            member: "5b696904f9aa993ad1c1e905",
            days: 6,
            out_date: new Date(),
            due_date: new Date(),
            in_date: new Date(),
            fine: 2000,
            booklist: ["5b69670b6f63b4399d6cf51e", "5b69670b6f63b4399d6cf51f"]
        }
        ])
            .then(transactions => {
                res.status(200).json({
                    msg: `Transactions data added!`,
                    transactions
                });
            })
            .catch(err => {
                res.status(500).json(err);
            })
    }, 

    findAllTransactions: (req, res) => {
        Transaction.find({}).populate('member').populate('booklist')
        .then(transactions => {
            res.status(200).json({
                msg: `All transactions data!`, 
                transactions
            });
        })
        .catch(err => {
            res.status(500).json(err);
        })
    }, 

    createTransaction: (req, res) => {
        Transaction.create({
            member: req.body.member, 
            days: req.body.days, 
            out_date: new Date(req.body.out_date), 
            due_date: new Date(req.body.due_date),
            in_date: new Date(req.body.in_date),
            fine: req.body.fine, 
            booklist: req.body.booklist
        })
        .then(transaction => {
            res.status(200).json({
                msg: `New Transaction record added!`,
                transaction
            });
        })
        .catch(err => {
            res.statua(500).json(err)
        })
    }, 

    updateTransaction: (req, res) => {
        Transaction.update({_id: req.params.id}, {
            member: req.body.member,
            days: req.body.days,
            out_date: req.body.out_date,
            due_date: req.body.due_date,
            in_date: req.body.in_date,
            fine: req.body.fine,
            booklist: req.body.booklist
        })
        .then(updated_transaction => {
            res.status(200).json({
                msg: `Transaction data updated!`,
                updated_transaction
            });
        })
        .catch(err => {
            res.status(500).json(err);
        })
    }, 

    deleteCustomer: (req, res) => {
        Transaction.deleteOne({_id: req.params.id})
        .then(deleted_transaction => {
            res.status(200).json({
                msg: `Transaction data deleted.`, 
                deleted_transaction
            });
        })
        .catch(err => {
            res.status(500).json(err);
        })
    }
}