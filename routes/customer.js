const router = require("express").Router();
const {
  create_customer,
  all_customer,
  delete_customer,
  update_customer
} = require("../controller/customer");

router.post("/", create_customer);
router.get("/", all_customer);
router.delete("/:id", delete_customer);
router.put("/:id", update_customer);

module.exports = router;
