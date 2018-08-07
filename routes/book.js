var express = require('express');
var router = express.Router();
const Book = require('../controller/book')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/add',Book.Add)
router.get('/find-all',Book.ReadAll)
router.get('/findOne/:id',Book.ReadOne)
router.put('/update/:id',Book.Update)
router.delete('/delete/:id',Book.Delete)




module.exports = router;
