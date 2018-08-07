const customer = require("../models/customer");

class CustomerController {
	constructor() {}

	static create(req, res) {
		let customer = new customer({
			name: req.body.name,
			memberid: req.body.memberid,
			address: req.body.address,
			zipcode: req.body.zipcode,
			phone: req.body.phone
		});

		customer.save()
			.then(customer => {
				res.status(200).json({
					message: "data saved",
					data: customer
				});
			})
			.catch(err => {
				res.status(500).json({
					message: err.message
				});
			});
	}

	static readAll(req, res) {
		customer.find({})
			.exec()
			.then(customer => {
				res.status(200).json({
					message: "Customers found",
					data: customer
				});
			})
			.catch(err => {
				res.status(400).json({
					message: err
				});
			});
	}

	static readOneById(req, res) {
		customer.findById(req.params.id)
			.exec()
			.then(customer => {
				res.status(200).json({
					message: "Customers found",
					data: customer
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
			name: req.body.name,
			memberid: req.body.memberid,
			address: req.body.address,
			zipcode: req.body.zipcode,
			phone: req.body.phone
		};

		customer.findByIdAndUpdate(req.params.id, newValue)
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
		customer.findByIdAndDelete(req.params.id)
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

module.exports = CustomerController;
