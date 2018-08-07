const router = require('express').Router()
const { findAll, addTransaction, findById } = require('../controllers/transactionController')

router.get('/', findAll)
router.post('/', addTransaction)
router.get('/:id', findById)

module.exports = router