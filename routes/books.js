var express = require('express');
var router = express.Router();
const Books = require('../controller/book')


router.get('/', Books.getAllBooks)
router.get('/:id', Books.getOneBook)
router.post('/', Books.createBook)
router.delete('/:id', Books.deleteBook)
router.put('/:id', Books.updateBook)

module.exports = router;
