const transactionRouter = require('express').Router();
const transactionController = require('../controllers/transactionController');

// transactionRouter.post('/transactions', transactionController.insertSeedTransactions);

transactionRouter.get('/transactions', transactionController.findAllTransactions);

transactionRouter.post('/transactions', transactionController.createTransaction);

transactionRouter.put('/transactions/:id', transactionController.updateTransaction);

transactionRouter.delete('/transactions/:id', transactionController.deleteCustomer);

module.exports = transactionRouter;