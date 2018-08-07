const bookRouter = require('express').Router();
const bookController = require('../controllers/bookController');

// bookRouter.post('/books', bookController.insertSeedBooks);

bookRouter.get('/books', bookController.findAllBooks);

bookRouter.post('/books', bookController.createBook);

bookRouter.put('/books/:id', bookController.updateBook);

bookRouter.delete('/books/:id', bookController.deleteBook);

module.exports = bookRouter;