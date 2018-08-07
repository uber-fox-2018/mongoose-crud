const router = require('express').Router();
const {add, getAll, getOne, update, updateOne, remove} = require('../controllers/transaction');

router.post('/', add)
router.get('/', getAll)
router.get('/:id', getOne)
router.put('/:id', update)
router.patch('/:id', updateOne)
router.delete('/:id', remove)
    

module.exports = router;