const Transaction = require("../models/transaction");
const mongoose = require('mongoose');


class TransactionController {
	constructor() {}

	static create(req, res) {
		let newtransaction = new Transaction({
			member: mongoose.Types.ObjectId(req.body.member),
			days: Number(req.body.days),
			out_date: new Date(req.body.outdate),
			due_date: new Date(req.body.outdate),
			in_date: new Date(req.body.indate),
			fine:req.body.fine,
			booklist: req.body.books.map(x=>mongoose.Types.ObjectId(x))
		});

		newtransaction
			.save()
			.then(transaction => {
				res.status(200).json({
					message: "data saved",
					data: transaction
				});
			})
			.catch(err => {
				res.status(500).json({
					message: err.message
				});
			});
	}

	static readAll(req, res) {
		Transaction.find({})
			.populate("booklist")
			.populate("member")
			.exec()
			.then(transaction => {
				res.status(200).json({
					message: "Transaction found",
					data: transaction
				});
			})
			.catch(err => {
				res.status(400).json({
					message: err
				});
			});
	}

	static readOneById(req, res) {
		Transaction.findById(req.params.id)
			.exec()
			.then(transaction => {
				res.status(200).json({
					message: "Transaction found",
					data: transaction
				});
			})
			.catch(err => {
				res.status(400).json({
					message: err.message
				});
			});
	}

	static updateById(req, res) {
		let newValue = {
			member: req.body.member,
			days: Number(req.body.days),
			out_date: new Date(req.body.out_date),
			in_date: new Date(),
			fine: Number(req.body.fine),
			booklist: req.body.booklist
		};

		Transaction.findByIdAndUpdate(req.params.id, newValue)
			.exec()
			.then(response => {
				res.status(200).json({
					message: "Updated",
					data: response
				});
			})
			.catch(err => {
				res.status(400).json({
					message: err.message
				});
			});
	}

	static deleteById(req, res) {
		Transaction.findByIdAndDelete(req.params.id)
			.exec()
			.then(response => {
				res.status(200).json({
					message: "Data Deleted",
					data: response
				});
			})
			.catch(err => {
				res.status(400).json({
					message: err.message
				});
			});
	}
}

module.exports = TransactionController;
