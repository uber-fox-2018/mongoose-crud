var express = require("express");
var router = express.Router();
const {
  addCustomer,
  getCustomer,
  updateCustomer,
  deleteCustomer
} = require('../controllers/customers')

router.post('/customers', addCustomer)
router.get('/customers', getCustomer)
router.put('/customers/:id', updateCustomer)
router.delete('/customers/:id', deleteCustomer)

module.exports =  router