const router = require('express').Router()
const { readTransaction, removeTransaction, addTransaction, updateTransaction } = require('../controllers/transaction-controller')

router.get('/', readTransaction)
router.post('/', addTransaction)
router.delete('/:id', removeTransaction)
router.put('/:id', updateTransaction)

module.exports = router