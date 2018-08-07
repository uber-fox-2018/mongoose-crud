const router = require('express').Router()
const CustomerController = require('../controllers/CustomerController')

router
    .get('/', CustomerController.index)
    .get('/:id', CustomerController.show)
    .post('/', CustomerController.create)
    .delete('/:id', CustomerController.delete)
    .put('/:id', CustomerController.update)

module.exports = router