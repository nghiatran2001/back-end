const express = require("express");
const { addArray, getEmail } = require("../controllers/OrderController");

const router = express.Router();

router.post("/add", addArray);
router.get("/:email", getEmail);

module.exports = router;
