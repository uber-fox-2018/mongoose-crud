const Book = require("../models/book");

class BookController {
	constructor() {}

	static create(req, res) {
		let book = new Book({
			isbn: req.body.isbn,
			title: req.body.title,
			author: req.body.author,
			category: req.body.category,
			stock: Number(req.body.stock)
		});

		book
			.save()
			.then(book => {
				res.status(200).json({
					message: "data saved",
					data: book
				});
			})
			.catch(err => {
				res.status(500).json({
					message: err.message
				});
			});
	}

	static readAll(req, res) {
		Book.find({})
			.exec()
			.then(books => {
				res.status(200).json({
					message: "books found",
					data: books
				});
			})
			.catch(err => {
				res.status(400).json({
					message: err
				});
			});
	}

	static readOneById(req, res) {
		Book.findById(req.params.id)
			.exec()
			.then(book => {
				res.status(200).json({
					message: "books found",
					data: book
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
			title: req.body.title,
			isbn: req.body.isbn,
			author: req.body.author,
			category: req.body.category,
			stock: req.body.stock
		};

		Book.findByIdAndUpdate(req.params.id, newValue)
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
		Book.findByIdAndDelete(req.params.id)
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

module.exports = BookController;
