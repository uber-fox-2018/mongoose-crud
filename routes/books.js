const router = require('express').Router()
const { findAll, findById, addBook, updateBook, deleteBook } = require('../controllers/bookController')

router.get('/', findAll)
router.get('/:id', findById)
router.post('/', addBook)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)

module.exports = router