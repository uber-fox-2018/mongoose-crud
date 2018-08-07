const router = require('express').Router()
const { insert,
        update,
        read,
        remove} = require('../controllers/book_controller')


router.get('/',read)
router.post('/',insert)
router.put('/:id',update)
router.delete('/:id',remove)

module.exports = router

