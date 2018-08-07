const Transaction = require("../models/transaction");
// const ObjectId = require("mongodb").ObjectId;
var mongoose = require("mongoose");
const Customer = require("../models/customer");
const Book = require("../models/books");

module.exports = {
  create_transaction: (req, res) => {
    let transaction = new Transaction({
      member: req.body.member,
      days: req.body.days,
      out_date: req.body.out_date,
      due_date: req.body.due_date,
      in_date: req.body.in_date,
      fine: req.body.fine,
      booklist: []
    });

    transaction
      .save()
      .then(newTransaction => {
        res.status(200).json({
          msg: "Inserted new Transactions",
          newTransaction
        });
      })
      .catch(() => {
        res.status(500).json({ msg: "err" });
      });
  },

  all_transaction: (req, res) => {
    Transaction.find().populate('member').populate('booklist')
      .then(found => {
        res.status(200).json({ msg: "Transactions available", found });
      })
      .catch(err => {
        res.status(500).json({ msg: "err", err });
      });
  },

  delete_transaction: (req, res) => {
    let objectId = mongoose.Types.ObjectId;

    Transaction.deleteOne({ _id: objectId(req.params.id) })
      .then(found => {
        res
          .status(200)
          .json({ msg: `Transaction id = ${objectId(req.params.id)} deleted` });
      })
      .catch(err => {
        res.status(500).json({ msg: "err", err });
      });
  },

  update_transaction: (req, res) => {
    // let objectId = mongoose.Types.ObjectId;

    Transaction.update(
      { _id: req.params.id },

      {
        $set: {
          member: req.body.member,
          days: req.body.days,
          out_date: req.body.out_date,
          due_date: req.body.due_date,
          in_date: req.body.in_date,
          fine: req.body.fine
        },
        $push: { booklist: req.body.booklist }
      }
    )
      .then(found => {
        res
          .status(200)
          .json({ msg: `Transaction id = ${req.params.id}`, found });
      })
      .catch(err => {
        res.status(500).json({ msg: "err", err });
      });
  }
};
