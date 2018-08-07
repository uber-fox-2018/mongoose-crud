const customers = require('../../models/customers')

const get = (req,res)=>{
    let id = req.params._id


    customers.findOne({id})
    .then( book =>{
        res.status(200).send({msg:'found your customer',customer})                 
    })
    .catch(err => res.status(400).send(err))
      
}

module.exports = {get}