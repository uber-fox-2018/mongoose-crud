var express = require('express');
var router = express.Router();
const {createCustomer, readCustomers, readOneCustomer, updateCustomer, deleteCustomer} = require('../controllers/customers')

/* GET users listing. */
router.post('/customers', createCustomer);
router.get('/customers', readCustomers);
router.get('/customers/:id', readOneCustomer);
router.put('/customers/:id', updateCustomer);
router.delete('/customers/:id', deleteCustomer);

module.exports = router;
