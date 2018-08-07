const Transaction = require('../models/Transaction');

module.exports = {
    add : (req,res)=>{
        let {member, days, out_date, due_date, in_date, fine, booklist} = req.body
        out_date = new Date()
        due_date = new Date(new Date().getTime()+(days)*24*60*60*1000)

        Transaction.create({member, days, out_date, due_date, in_date, fine, booklist})
            .then(newTransaction=>{
                res.status(201).json(newTransaction)
            })
            .catch(err=>{
                res.status(500).json({msg:err})
            })

    }, 
    
    getAll : (req,res)=>{
        Transaction.find()
        .populate("member")
        .populate("booklist")
        .then(transactions=>{
            res.status(200).json(transactions)
        })
        .catch(err=>{
            res.status(500).json({msg:err})
        })
    }, 
    
    getOne: (req,res)=>{
        Transaction.findById(req.params.id)
            .then(transaction=>{
                res.status(200).json(transaction)
            })
            .catch(err=>{
                res.status(500).json({msg:err})
            })
    }, 
    
    update: (req,res)=>{
        Transaction.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
            .then(updatedTransaction=>{
                res.status(200).json(updatedTransaction)
            })
            .catch(err=>{
                res.status(500).json({msg:err})
            })
    },

    updateOne:  (req,res)=>{ 
        Transaction.findOne({_id:req.params.id})
            .then(transaction=>{ 
                transaction.update({
                    in_date: transaction.in_date,
                    due_date: transaction.due_date
                }).then(()=>{
                    res.status(201).json({
                        msg:"success"
                    })
                })
                .catch(err=>{
                    res.status(500).json({msg:err})
                })
            })
    },
    
    remove: (req,res)=>{
        Transaction.remove({_id: req.params.id})
            .then(()=>{
                res.status(200).json({message: 'We deleted it!'});
            })
            .catch(err=>{
                res.status(500).json({msg:err})
            })
    }
}
