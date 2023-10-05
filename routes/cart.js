const express = require("express");

const {
  getIdProduct,
  addCart,
  getAllCart,
} = require("../controllers/CartController");

const router = express.Router();

router.post("/add", addCart);
router.get("/:id", getIdProduct);
router.get("/getall", getAllCart);

module.exports = router;
