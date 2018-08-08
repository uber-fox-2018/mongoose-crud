const router = require('express').Router()
const TransactionController = require('../controllers/transaction')

router.get('/', TransactionController.transactionFindAll)
      .get('/', TransactionController.transactionFindOne)
      .post('/', TransactionController.transactionCreate)
      .put('/:id', TransactionController.transactionUpdate)
      .delete('/:id', TransactionController.transactionDelete)

module.exports = router