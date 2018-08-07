const Customer = require('../models/customer');

module.exports = {

    insertSeedCustomers: (req, res) => {
        Customer.insertMany([{
            name: "Rubi Henjaya",
            memberid: "CL0001",
            address: "Ujung Berung Bandung",
            zipcode: "40294",
            phone: "08112237788"
        }, {
            name: "Riza Fahmi",
            memberid: "CL0002",
            address: "Something in Jakarta",
            zipcode: "50022",
            phone: "081122336655"
        }
        ])
            .then(customers => {
                res.status(200).json({
                    msg: `Customers data added!`,
                    customers
                });
            })
            .catch(err => {
                res.status(500).json(err);
            })
    },

    findAllCustomers: (req, res) => {
        Customer.find({})
        .then(customers => {
            res.status(200).json({
                msg: `Found all Customer records.`,
                customers
            });
        })
        .catch(err => {
            res.status(500).json(err);
        })
    }, 

    addCustomer: (req, res) => {
        Customer.create({
            name: req.body.name,
            memberid: req.body.memberid, 
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
        })
        .then(customer => {
            res.status(200).json({
                msg: `New customer added!`,
                customer
            });
        })
        .catch(err => {
            res.status(500).json(err);
        })
    }, 

    updateCustomer: (req, res) => {
        Customer.update({_id: req.params.id}, {
            name: req.body.name,
            memberid: req.body.memberid,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
        })
        .then(updated_customer => {
            res.status(200).json({
                msg: `Customer data updated!`,
                updated_customer
            });
        })
        .catch(err => {
            res.status(500).json(err);
        })
    }, 

    deleteCustomer: (req, res) => {
        Customer.deleteOne({_id: req.params.id})
        .then(deleted_customer => {
            res.status(200).json({
                msg: `Customer's data deleted from record.`, 
                deleted_customer
            });
        })
        .catch(err => {
            res.status(500).json(err);
        })
    }

}