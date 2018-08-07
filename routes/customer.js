const router = require('express').Router()
const {insertCustomer, deleteCustomer, updateCustomer, getCustomer} = require('../controllers/customer_controller')

router.get('/', getCustomer)
router.post('/', insertCustomer)
router.delete('/:id', deleteCustomer)
router.put('/:id', updateCustomer)

module.exports = router