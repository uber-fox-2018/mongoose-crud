const Customer = require("../models/customer");
// const ObjectId = require("mongodb").ObjectId;
var mongoose = require("mongoose");

module.exports = {
  create_customer: (req, res) => {
    let customer = new Customer({
      name: req.body.name,
      memberId: req.body.memberId,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    });

    customer
      .save()
      .then(newCustomer => {
        res.status(200).json({
          msg: "Inserted new Customers into the collection",
          newCustomer
        });
      })
      .catch(() => {
        res.status(500).json({ msg: "err" });
      });
  },

  all_customer: (req, res) => {
    Customer.find()
      .then(found => {
        res.status(200).json({ msg: "Customers available", found });
      })
      .catch(err => {
        res.status(500).json({ msg: "err", err });
      });
  },

  delete_customer: (req, res) => {
    let objectId = mongoose.Types.ObjectId;

    Customer.deleteOne({ _id: objectId(req.params.id) })
      .then(found => {
        res
          .status(200)
          .json({ msg: `Customer id = ${objectId(req.params.id)} deleted` });
      })
      .catch(err => {
        res.status(500).json({ msg: "err", err });
      });
  },

  update_customer: (req, res) => {
    // let objectId = mongoose.Types.ObjectId;

    Customer.update(
      { _id:req.params.id},
      {
        $set: {
          name: req.body.name,
          memberId: req.body.memberId,
          address: req.body.address,
          zipcode: req.body.zipcode,
          phone: req.body.phone
        }
      }
    )
      .then(found => {
        res.status(200).json({ msg: `Customer id = ${req.params.id}`,found});
      })
      .catch(err => {
        res.status(500).json({ msg: "err", err });
      });
  }
};
