var express = require('express');
var router = express.Router();
const customerRoutes = require('../controller/customer.js')

/* GET users listing. */
router.get('/', customerRoutes.findAll);

router.get('/findbyId/:id', customerRoutes.findOne)

router.post('/add-customer', customerRoutes.create)

router.put('/edit/:id', customerRoutes.update)

router.delete('/delete/:id', customerRoutes.delete)



module.exports = router;