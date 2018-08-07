var express = require('express');
var router = express.Router();
let CustomerController= require("../controllers/customercontroller");

router
	.route("/")
	.get(CustomerController.readAll)
	.post(CustomerController.create);

router
	.route("/:id")
	.get(CustomerController.readOneById)
	.delete(CustomerController.deleteById)
	.put(CustomerController.updateById);

module.exports = router;
