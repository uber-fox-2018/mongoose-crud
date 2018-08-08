const Customer = require('../models/customer_model')

module.exports = {

    Create_New_Customer ( req, res ) {
 
        const newCustomer = {
            name: req.body.name,
            memberid: req.body.memberid,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
        }

        Customer.create( newCustomer, ( err, response ) => {
            if (err) throw err

            res.status(201).json({
                msg: `success create new customer`,
                response
            })
            
        })

    },

    Read_Customer ( req, res ) {

        Customer.find({}, ( err, response ) => {
            if (err) throw err

            res.status(201).json({
                response
            })
            
        })

    },

    Update_Customer ( req, res ) {

        const {name, memberid, address, zipcode, phone} = req.body

        Customer.findOneAndUpdate({ _id: req.params.id },{$set: 
            {
                name: name,
                memberid: memberid,
                address: address,
                zipcode: zipcode,
                phone: phone
            }
        }, ( err, response ) => {
            if (err) {
                res.status(401).json({
                    err: err
                })
            } else {
                res.status(201).json({
                    msg: `success update customer with id ${req.params.id}`,
                    response
                })
            }
        })

    },

    Delete_Customermodel ( req, res ) {
        
        Customer.findOneAndRemove({ _id: req.params.id }, ( err, response ) => {
            if (err) throw err

            res.status(201).json({
                msg: `success delete customer with ID ${req.params.id}`,
                response
            })
        })
    }

}