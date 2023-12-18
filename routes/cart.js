const express = require("express");

const {
  addCart,
  getAllCart,
  getEmail,
} = require("../controllers/CartController");

const router = express.Router();

router.post("/add", addCart);
router.get("/getall", getAllCart);
router.get("/:email", getEmail);

module.exports = router;
