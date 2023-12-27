const express = require("express");
const {
  addArray,
  getEmail,
  update,
} = require("../controllers/OrderController");

const router = express.Router();

router.post("/add", addArray);
router.get("/:email", getEmail);
router.put("/:id", update);

module.exports = router;
