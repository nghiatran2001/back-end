const express = require("express");
const {
  addCategory,
  getAllCategory,
  getCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/CategoryController");

const router = express.Router();

router.post("/add", addCategory);
router.get("/getall", getAllCategory);
router.get("/:id", getCategory);
router.delete("/:id", deleteCategory);
router.put("/:id", updateCategory);

module.exports = router;
