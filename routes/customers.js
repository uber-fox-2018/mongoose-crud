var express = require('express');
var router = express.Router();
const customersController = require('../controllers/customersController')


/* GET customers listing. */
router.get('/', customersController.getCustomers);
router.get('/:id', customersController.getOneCustomer);
router.post('/addOne', customersController.addOneCustomer);
router.post('/addMany', customersController.addManyCustomer);
router.delete('/:id/delete', customersController.deleteCustomer);
router.put('/:id/update', customersController.updateCustomer);

module.exports = router;
