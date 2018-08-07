var express = require('express');
var router = express.Router();
const Customer = require('../controller/customer')

router.post('/add',Customer.Add)
router.get('/find-all',Customer.ReadAll)
router.get('/findOne/:id',Customer.ReadOne)
router.put('/update/:id',Customer.Update)
router.delete('/delete/:id',Customer.Delete)




module.exports = router;
