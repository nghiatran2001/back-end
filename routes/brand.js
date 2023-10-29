const express = require("express");
const {
  addBrand,
  getAllBrand,
  getBrand,
  deleteBrand,
  updateBrand,
} = require("../controllers/BrandController");

const router = express.Router();

router.post("/add", addBrand);
router.get("/getall", getAllBrand);
router.get("/:id", getBrand);
router.delete("/:id", deleteBrand);
router.put("/:id", updateBrand);

module.exports = router;
