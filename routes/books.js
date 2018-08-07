var express = require("express");
var router = express.Router();
const {
  addBook,
  getBook,
  updateBook,
  deleteBook
} = require("../controllers/books");

router.post("/books", addBook);
router.get("/books", getBook);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);

module.exports = router;
