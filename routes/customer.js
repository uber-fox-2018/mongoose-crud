const router = require('express').Router()
const { addCustomer,readCustomer, removeCustomer, updateCustomer } = require('../controllers/customer-controller')

router.get('/', readCustomer)
router.post('/', addCustomer)
router.delete('/:id', removeCustomer)
router.put('/:id', updateCustomer)

module.exports = router