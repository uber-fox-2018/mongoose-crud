var express = require('express');
var router = express.Router();
const {addTransaction, readTransactions, readOneTransaction, updateTransaction, deleteTransaction} = require('../controllers/transactions')

router.post('/transactions', addTransaction)
router.get('/transactions', readTransactions)
router.get('/transactions/:id', readOneTransaction)
router.put('/transactions/:id', updateTransaction)
router.delete('/transactions/:id', deleteTransaction)

module.exports = router