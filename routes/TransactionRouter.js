const router = require('express').Router()
const TransactionController = require('../controllers/TransactionController')

router
    .get('/', TransactionController.index)
    .get('/:id', TransactionController.show)
    .post('/', TransactionController.create)
    .delete('/:id', TransactionController.delete)
    .put('/:id', TransactionController.update)

module.exports = router