const express = require('express');
const router = express.Router();

const {
  addTransaction,
  getTransaction,
  deleteTransaction
} = require('../controllers/transactions')

router.post('/transactions', addTransaction)
router.get('/transactions', getTransaction)
router.delete('/transactions/:id', deleteTransaction)

module.exports = router