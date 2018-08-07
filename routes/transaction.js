const router = require('express').Router()
const { readData,
        insertData,
        updateData,
        removeData } = require('../controllers/transaction_controller');

router.get('/',readData)
      .post('/',insertData)
      .put('/:id',updateData)
      .delete('/:id',removeData)


module.exports = router