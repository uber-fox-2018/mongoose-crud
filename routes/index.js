const router = require('express').Router();
const bookRouter = require('./books');
const customerRouter = require('./customers');
const transactionRouter = require('./transactions');


// router.use('/', (req, res) => {
//     console.log('Home');
// })

router.use(bookRouter);
router.use(customerRouter);
router.use(transactionRouter)

module.exports = router;