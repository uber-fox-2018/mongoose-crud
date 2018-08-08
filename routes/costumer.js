const router = require('express').Router()
const CostumerController = require('../controllers/costumer')

router.get('/', CostumerController.costumerFindAll)
      .get('/', CostumerController.costumerFindOne)
      .post('/', CostumerController.costumerCreate)
      .put('/:id', CostumerController.costumerUpdate)
      .delete('/:id', CostumerController.costumerDelete)

module.exports = router