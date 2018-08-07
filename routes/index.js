const router = require('express').Router()
const bookrouter = require('./book');
const customerRouter = require('./customer');
const transactionRouter = require('./transaction');

router.get('/',(req,res)=>{
    res.status(300).json({
        msg: "connect"
    })
})

router.use('/books',bookrouter)
      .use('/customers',customerRouter)
      .use('/transactions',transactionRouter)

module.exports = router

