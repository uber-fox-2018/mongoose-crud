var express = require('express');
var router = express.Router();
const bookRoutes = require('../controller/book.js')

/* GET users listing. */
router.get('/', bookRoutes.findAll);

router.get('/findbyId/:id', bookRoutes.findOne)

router.post('/add-book', bookRoutes.create)

router.put('/edit/:id', bookRoutes.update)

router.delete('/delete/:id', bookRoutes.delete)



module.exports = router;
