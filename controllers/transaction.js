const Transaction = require('../models/transaction')


module.exports = {
    transactionFindAll: (req,res) =>{
        Transaction
            .find().populate('member').populate('booklist') //kolom member dan booklist(akan itampilkan)
            .then(transaction  => {
                res.status(200).json({
                    msg:'create success',
                    data: transaction 
                })
            })

            .catch(err => {
                res.status(500).json({
                    msg:'error'
                })
            })
    },
    transactionFindOne: (req,res) => {
        Transaction
            .findOne({
                id:req.params.id
            })
            .then(transaction => {
                res.status(200).json({
                    msg:'success find id',
                    data: transaction 
                })
            })

            .catch(err => {
                res.status(500).json({
                    msg: 'error'
                })
            })

    },
    transactionCreate: (req,res) => {
     
        Transaction
            .create({
                member: req.body.member,
                days: req.body.days,
                out_date: req.body.out_date,
                due_date: req.body.due_date,
                in_date: req.body.in_date,
                fine: req.body.fine,
                booklist:[]
                
            })

            .then(transaction  => {
                res.status(200).json({
                    msg:'create success',
                    transaction 
                })
            })

            .catch(err => {
                res.status(500).json({
                    msg:'error'
                })
            })
    },

    transactionUpdate: (req,res) => {
        Transaction
            .update(
                {
                    _id:req.params.id
                },
                { $set:
                    {
                    member: req.body.member,
                    days: req.body.days,
                    out_date: req.body.out_date,
                    due_date: req.body.due_date,
                    in_date: req.body.in_date,
                    fine: req.body.fine,
                    booklist:[]
                    },
                },{
                    $push:{booklist:req.body.booklist}
                })

            .then(transaction  => {
                res.status(200).json({
                    msg:'Transaction id = ${req.params.id}',
                    data: found
                })
            })

            .catch(err => {
                res.status(500).json({
                    msg:'error'
                })
            })
    },

    transactionDelete: (req,res) => {
        Transaction
            .deleteOne(
                {
                    _id:req.params.id
                })

            .then(transaction => {
                res.status(200).json({
                    msg: 'Transaction id = ${mongoose.Types.ObjectId(req.params.id)} deleted',
                    data: transaction 

                })
            })

            .catch(err => {
                res.status(500).json({
                    msg: 'error'
                })
            })
    }
}



