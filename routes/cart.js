const express = require("express");

const {
  addCart,
  getAllCart,
  getEmail,
  deleteProduct,
  update,
  updateQuantity,
  updateQuantityTru,
  updateAmount,
} = require("../controllers/CartController");

const router = express.Router();

router.post("/add", addCart);
router.get("/getall", getAllCart);
router.get("/:email", getEmail);
router.delete("/:id", deleteProduct);
router.put("/:id", update);
router.put("/quantity/:id", updateQuantity);
router.put("/quantity1/:id", updateQuantityTru);
router.put("/update/:id", updateAmount);

module.exports = router;
