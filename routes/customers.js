const customerRouter = require('express').Router();
const customerController = require('../controllers/customerController');

// customerRouter.post('/customers', customerController.insertSeedCustomers);

customerRouter.get('/customers', customerController.findAllCustomers);

customerRouter.post('/customers', customerController.addCustomer);

customerRouter.put('/customers/:id', customerController.updateCustomer);

customerRouter.delete('/customers/:id', customerController.deleteCustomer);

module.exports = customerRouter;