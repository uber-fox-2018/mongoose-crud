const router = require('express').Router()
const { addBook,readBook, removeBook, updateBook } = require('../controllers/books-controller')

router.get('/', readBook)
router.post('/add', addBook)
router.delete('/:id', removeBook)
router.put('/:id', updateBook)

module.exports = router