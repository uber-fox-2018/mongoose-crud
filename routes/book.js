const routes = require('express').Router()
const {add,readAll,readOne,remove,update} = require('../controllers/book')

routes.get('/',readAll)
routes.post('/',add)
routes.get('/:id',readOne)
routes.delete('/:id',remove)
routes.put('/:id',update)


module.exports = routes