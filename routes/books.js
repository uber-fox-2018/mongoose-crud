const router = require('express').Router()
const BookController = require('../controllers/books')

router.get('/', BookController.bookFindAll)
      .get('/', BookController.bookFindOne)
      .post('/', BookController.bookCreate)
      .put('/:id', BookController.bookUpdate)
      .delete('/:id', BookController.bookDelete)

module.exports = router