const router = require("express").Router();
const {
  create_book,
  all_book,
  delete_book,
  update_books
} = require("../controller/book");

router.post("/", create_book);
router.get("/", all_book);
router.delete("/:id", delete_book);
router.put("/:id", update_books);




module.exports = router;
