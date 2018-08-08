const router = require('express').Router()
const {
    Create_New_Customer,
    Read_Customer,
    Update_Customer,
    Delete_Customermodel
} = require('../controllers/customer-controller')

router
    .route('/')
    .post(Create_New_Customer)
    .get(Read_Customer)

router
    .route('/:id')
    .put(Update_Customer)
    .delete(Delete_Customermodel)

module.exports = router