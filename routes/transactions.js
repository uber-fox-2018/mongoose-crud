var express = require('express');
var router = express.Router();
const Transactions = require('../controller/transaction')


router.get('/', Transactions.getAllTransactions)
router.get('/:id', Transactions.getOneTransaction)
router.post('/', Transactions.createTransaction)
router.delete('/:id', Transactions.deleteTransaction)
router.put('/:id', Transactions.updateTransaction)

module.exports = router;
