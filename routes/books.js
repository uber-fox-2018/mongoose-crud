var express = require('express');
var router = express.Router();
let BookController= require("../controllers/bookcontroller");

router
	.route("/")
	.get(BookController.readAll)
	.post(BookController.create);

router
	.route("/:id")
	.get(BookController.readOneById)
	.delete(BookController.deleteById)
	.put(BookController.updateById);

module.exports = router;
