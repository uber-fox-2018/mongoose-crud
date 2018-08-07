const transactions = require('../../models/transactions')

const get = (req,res)=>{
    let id = req.params._id


    transactions.findOne({id})
    .then( transaction =>{
        res.status(200).send({msg:'found your transaction',transaction})                 
    })
    .catch(err => res.status(400).send(err))
      
}

module.exports = {get}