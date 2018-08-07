const router = require('express').Router()
const { read,
        insert,
        update,
        remove } = require('../controllers/customer_controller');

router.get('/',read)
      .post('/',insert)
      .put('/:id',update)
      .delete('/:id',remove)


module.exports= router