var express = require('express');
var router = express.Router();
const Transaction = require('../controller/transaction')

router.post('/add',Transaction.Add)
router.get('/find-all',Transaction.ReadAll)
router.get('/findOne/:id',Transaction.ReadOne)
router.put('/update/:id',Transaction.Update)
router.delete('/delete/:id',Transaction.Delete)




module.exports = router;
