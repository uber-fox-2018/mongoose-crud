const transactions = require('../../models/transactions')

const get = (req,res)=>{
       
    transactions.find()
    .populate('booklist','title')
    .populate('member','name')
    .then(transaction => {
        res.status(200).send({msg:'success', transaction})
    })
    .catch(err => res.status(400).send(err))
      
}

module.exports = {get}