const router = require('express').Router()
const BookController = require('../controllers/BookController')

router
    .get('/',BookController.index)
    .get('/:id',BookController.show)
    .post('/',BookController.create)
    .delete('/:id',BookController.delete)
    .put('/:id', BookController.update)

module.exports = router