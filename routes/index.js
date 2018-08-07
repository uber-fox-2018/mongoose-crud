const router = require('express').Router()

router.use('/books', require('./books'))
router.use('/customers', require('./customers'))
router.use('/transactions', require('./transactions'))

module.exports = router