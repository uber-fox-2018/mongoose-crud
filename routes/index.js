const express = require('express');
const router = express.Router();
const books = require("./books");
const customers = require("./customers");
const transactions = require("./transactions");

router.use("/api/books", books);
router.use("/api/customers", customers);
router.use("/api/transactions", transactions);

router.get("/", (req, res) => {
	res.send("This Mango DB Works!");
});


	
module.exports = router;
