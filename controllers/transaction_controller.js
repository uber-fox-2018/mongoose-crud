const Transaction = require('../models/transaction');


module.exports = {
    insertData: (req, res) => {
        const {member, days, out_date, due_date, in_date, fine, booklist} = req.body
        if(typeof booklist === String){
            booktoInsert = [booklist]
        }else{
            booktoInsert = booklist
        }

        Transaction.create({
            member: member,
            days: days,
            out_date: out_date,
            due_date: due_date,
            in_date: in_date,
            fine: fine,
            booklist: booktoInsert
        })  
        .then((newTransaction) => {
            res.status(201).json({
                msg: 'data inserted',
                newTransaction
            })
        })
        .catch((err) => {
            res.status(500).json({
                msg: 'insert data failed',
                err: err.message
            })
        });
    },

    readData: (req, res) => {
        Transaction.find({})
            .populate('member','name')
            .populate('booklist','title')
            .then((transactions) => {
                res.status(200).json({
                    msg: 'these are transactions data',
                    transactions
                })
            })
            .catch((err) => {
                res.status(200).json({
                    msg: 'data not found',
                    transactions
                })
            });
    },

    updateData: (req, res) => {
        Transaction.updateOne({ _id : req.params.id},{
            $push : {booklist : req.body.booklist}
        })
        .then((updated) => {
            res.status(200).json({
                msg: 'data updated',
                updated
            })
        })
        .catch((err) => {
            res.status(200).json({
                msg: 'update data failed',
                err: err.message
            })
        });
    },

    removeData: (req, res) => {
        Transaction.deleteOne({
            _id : req.params.id
        })

        .then((deleted) => {
            res.status(200).json({
                msg: 'data deleted',
                deleted
            })
        })
        .catch((err) => {
            res.status(200).json({
                msg: 'delete data failed',
                err: err.message
            })
        });
    }
};
