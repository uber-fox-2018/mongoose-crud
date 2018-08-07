const router = require('express').Router()
const {
    insertBook, 
    deleteBook, 
    updateBook, 
    getBook
} = require('../controllers/book_controller')

router.get('/', getBook)
router.post('/', insertBook)
router.delete('/:id', deleteBook)
router.put('/:id', updateBook)

module.exports = router