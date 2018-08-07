const Costumer = require('../models/costumer')


module.exports = {
    costumerFindAll: (req,res) =>{
        Costumer
            .find()
            .then(costumer => {
                res.status(200).json({
                    msg:'create success',
                    data: costumer
                })
            })

            .catch(err => {
                res.status(500).json({
                    msg:'error'
                })
            })
    },
    costumerFindOne: (req,res) => {
        Costumer
            .findOne({
                id:req.params.id
            })
            .then(costumer=> {
                res.status(200).json({
                    msg:'success find id',
                    data: costumer
                })
            })

            .catch(err => {
                res.status(500).json({
                    msg: 'error'
                })
            })

    },
    costumerCreate: (req,res) => {
     
        Costumer
            .create({
                name:req.body.name,
                memberid:req.body.memberid,
                address:req.body.address,
                zipcode:req.body.zipcode,
                phone:req.body.phone
            })

            .then(costumer => {
                res.status(200).json({
                    msg:'create success',
                    costumer
                })
            })

            .catch(err => {
                res.status(500).json({
                    msg:'error'
                })
            })
    },

    costumerUpdate: (req,res) => {
        Costumer
            .update(
                {
                    _id:req.params.id
                },
                { $set: 
                    {
                    name:req.body.name,
                    memberid:req.body.memberid,
                    address:req.body.address,
                    zipcode:req.body.zipcode,
                    phone:req.body.phone
                    }
            })

            .then(costumer => {
                res.status(200).json({
                    msg:'update success',
                    data: costumer
                })
            })

            .catch(err => {
                res.status(500).json({
                    msg:'error'
                })
            })
    },

    costumerDelete: (req,res) => {
        Costumer
            .deleteOne(
                {
                    _id:req.params.id
                })

            .then(costumer => {
                res.status(200).json({
                    msg: 'delete success',
                    data: costumer

                })
            })

            .catch(err => {
                res.status(500).json({
                    msg: 'error'
                })
            })
    }
}



