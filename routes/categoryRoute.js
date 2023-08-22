const express = require("express");
const {
  createCateogry,
  getAllCategory,
  getCategory,
  deleteCategory,
} = require("../controllers/CategoryController");

const router = express.Router();

router.post("/add", createCateogry);
router.get("/getall", getAllCategory);
router.get("/:id", getCategory);
router.delete("/:id", deleteCategory);
// router.put("/update", updateCateogry);

module.exports = router;
