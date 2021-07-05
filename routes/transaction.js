const router = require("express").Router();
const {
  create_transaction,
  all_transaction,
  delete_transaction,
  update_transaction
} = require("../controller/transaction");

router.post("/", create_transaction);
router.get("/", all_transaction);
router.delete("/:id", delete_transaction);
router.put("/:id", update_transaction);

module.exports = router;
