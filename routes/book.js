const router = require('express').Router()
const {
    Create_New_Book,
    Read_Books,
    Update_Book,
    Delete_Book
} = require ('../controllers/book-controller')

router
    .route('/')
    .post(Create_New_Book)
    .get(Read_Books)

router
    .route('/:id')
    .put(Update_Book)
    .delete(Delete_Book)

module.exports = router