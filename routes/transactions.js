var express = require('express');
var router = express.Router();
const transactionRoutes = require('../controller/transaction.js')

/* GET users listing. */
router.get('/', transactionRoutes.findAll);

router.get('/findbyId/:id', transactionRoutes.findOne)

router.post('/add-transaction', transactionRoutes.create)

router.put('/edit/:id', transactionRoutes.edit)

router.delete('/delete/:id', transactionRoutes.delete)
module.exports = router;