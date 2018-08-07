var express = require('express');
var router = express.Router();
const Controller = require('../controller/bookController')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/library/create',Controller.createData)
router.get('/library/allData',Controller.showAll)
router.get('/library/find/:id',Controller.findbyId)
router.delete('/library/delete/:id',Controller.deleteData)
router.put('/library/update/:id',Controller.updateData)

module.exports = router;