const express = require("express");

const {
  getIdProduct,
  addCart,
  getAllCart,
} = require("../controllers/CartController");

const router = express.Router();

router.get("/:id", getIdProduct);
router.get("/getall", getAllCart);
router.post("/add", addCart);

module.exports = router;
