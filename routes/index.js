const routes = require('express').Router()
const routesBook = require('./book')
const routesCustomer = require('./customer')
const routesTransaction = require('./transaction')

routes.use('/books',routesBook)
routes.use('/customers',routesCustomer)
routes.use('/transactions',routesTransaction)

module.exports = routes
