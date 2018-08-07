const router = require('express').Router();
const {add, getAll, getOne, update, remove} = require('../controllers/book');

router.post('/', add)
router.get('/', getAll)
router.get('/:id', getOne)
router.put('/:id', update)
router.delete('/:id', remove)
    

module.exports = router;