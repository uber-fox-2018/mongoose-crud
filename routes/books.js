var express = require('express');
var router = express.Router();
const {readBooks, createBook, readOneBook, updateBook, deleteBook} = require('../controllers/books')

router.get('/books', readBooks)
router.get('/books/:id', readOneBook)
router.post('/books', createBook)
router.put('/books/:id', updateBook)
router.delete('/books/:id', deleteBook)

module.exports = router;
