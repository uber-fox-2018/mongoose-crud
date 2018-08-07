var express = require("express");
var router = express.Router();
let TransactionController = require("../controllers/transactioncontroller");

router
	.route("/")
	.get(TransactionController.readAll)
	.post(TransactionController.create);

router
	.route("/:id")
	.get(TransactionController.readOneById)
	.delete(TransactionController.deleteById)
	.put(TransactionController.updateById);

module.exports = router;
