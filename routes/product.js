const express = require("express");
const {
  addProduct,
  getAllProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/ProductController");

const router = express.Router();

router.post("/add", addProduct);
router.get("/getall", getAllProduct);
router.get("/:id", getProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

module.exports = router;
