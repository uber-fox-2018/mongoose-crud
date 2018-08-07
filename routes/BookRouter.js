const router = require('express').Router()
const BookController = require('../controllers/BookController')

router
    .get('/',BookController.index)
    .get('/:isbn',BookController.show)
    .post('/',BookController.create)
    .delete('/:isbn',BookController.delete)
    .put('/:isbn', BookController.update)

module.exports = router