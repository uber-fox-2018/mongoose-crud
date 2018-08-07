const router = require('express').Router()
const { readTransaction, removeTransaction, addTransaction } = require('../controllers/transaction-controller')

router.get('/', readTransaction)
router.post('/add', addTransaction)
router.delete('/:id', removeTransaction)
// router.put('/:id', updateCustomer)

module.exports = router