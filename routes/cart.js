const express = require("express");

const {
  addCart,
  getAllCart,
  getEmail,
  deleteProduct,
  update,
  updateAmount,
} = require("../controllers/CartController");

const router = express.Router();

router.post("/add", addCart);
router.get("/getall", getAllCart);
router.get("/:email", getEmail);
router.delete("/:id", deleteProduct);
router.put("/:id", update);
router.put("/:id", updateAmount);

module.exports = router;
