const express = require("express");
const {
  addOrder,
  getAll,
  getId,
  updateOrder,
} = require("../controllers/PaymentController");

const router = express.Router();

router.post("/add", addOrder);
router.get("/getall", getAll);
router.get("/:id", getId);
router.put("/:id", updateOrder);

module.exports = router;
