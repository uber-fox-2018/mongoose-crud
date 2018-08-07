var express = require('express');
var router = express.Router();
const Customers = require('../controller/customer')


router.get('/', Customers.getAllCustomers)
router.get('/:id', Customers.getOneCustomer)
router.post('/', Customers.createCustomer)
router.delete('/:id', Customers.deleteCustomer)
router.put('/:id', Customers.updateCustomer)

module.exports = router;
