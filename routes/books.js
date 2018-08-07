const express = require('express');
const router = express.Router();
const {
  getAllBook,
  createBook,
  getBook,
  updateBook,
} = require('../controllers/book');

router.route('/')
  .post(createBook)
  .get(getAllBook)

router.route('/:id')
  .get(getBook)
  .put(updateBook)

module.exports = router;
