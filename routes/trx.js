const router = require('express').Router()

const {
    Create_New_Transaction,
    Read_Transaction,
    Update_Transaction,
    Delete_Transactionmodel
} = require('../controllers/trx-controller')

router
    .route('/')
    .post(Create_New_Transaction)
    .get(Read_Transaction)

router
    .route('/:id')
    .put(Update_Transaction)
    .delete(Delete_Transactionmodel)

module.exports = router