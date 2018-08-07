var express = require('express');
var router = express.Router();
const booksController = require('../controllers/booksController')


/* GET books listing. */
router.get('/', booksController.getBooks);
router.get('/:id', booksController.getOneBook);
router.post('/addOne', booksController.addOneBook);
router.post('/addMany', booksController.addManyBook);
router.delete('/:id/delete', booksController.deleteBook);
router.put('/:id/update', booksController.updateBook);

module.exports = router;
