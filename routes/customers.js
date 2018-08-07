const router = require('express').Router()
const { findAll, findById, addCustomer, updateCustomer, deleteCustomer } = require('../controllers/customerController')

router.get('/', findAll)
router.get('/:id', findById)
router.post('/', addCustomer)
router.put('/:id', updateCustomer)
router.delete('/:id', deleteCustomer)

module.exports = router