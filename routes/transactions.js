var express = require('express');
var router = express.Router();
const transactionsController = require('../controllers/transactionsController')


/* GET transactions listing. */
router.get('/', transactionsController.getTransactions);
router.get('/:id', transactionsController.getOneTransaction);
router.post('/addOne', transactionsController.addOneTransaction);
router.post('/addMany', transactionsController.addManyTransaction);
router.delete('/:id/delete', transactionsController.deleteTransaction);
router.put('/:id/update', transactionsController.updateTransaction);

module.exports = router;
