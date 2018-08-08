const Transaction = require('../models/trx_model')

module.exports = {

    Create_New_Transaction ( req, res ) {
 
        const newTransaction = {
            member: req.body.member,
            days: req.body.days,
            out_date: req.body.out_date,
            due_date: req.body.due_date,
            ind_date: req.body.ind_date,
            fine: req.body.fine,
            booklist: req.body.booklist
        }

        Transaction.create( newTransaction, ( err, response ) => {
            if (err) throw err

            res.status(201).json({
                msg: `success create new Transaction`,
                response
            })
            
        })

    },

    Read_Transaction ( req, res ) {

        Transaction.find({}).
        populate('Customer').populate('Book').
        exec( function(err, response){
            if (err) throw err

            res.status(201).json({
                response
            })
            
        })

    },

    Update_Transaction ( req, res ) {

        const {member, days, out_date, due_date, ind_date, fine, booklist} = req.body

        Transaction.findOneAndUpdate({ _id: req.params.id },{$set: 
            {
                member: member,
                days: days,
                out_date: out_date,
                due_date: due_date,
                ind_date: ind_date,
                fine: fine,
                booklist: booklist
            }
        }, ( err, response ) => {
            if (err) {
                res.status(401).json({
                    err: err
                })
            } else {
                res.status(201).json({
                    msg: `success update Transaction with id ${req.params.id}`,
                    response
                })
            }
        })

    },

    Delete_Transactionmodel ( req, res ) {
        
        Transaction.findOneAndRemove({ _id: req.params.id }, ( err, response ) => {
            if (err) throw err

            res.status(201).json({
                msg: `success delete Transaction with ID ${req.params.id}`,
                response
            })
        })
    }

}