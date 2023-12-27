const express = require("express");

const {
  addCart,
  getAllCart,
  getEmail,
  deleteProduct,
  update,
} = require("../controllers/CartController");

const router = express.Router();

router.post("/add", addCart);
router.get("/getall", getAllCart);
router.get("/:email", getEmail);
router.delete("/:id", deleteProduct);
router.put("/:id", update);

module.exports = router;
