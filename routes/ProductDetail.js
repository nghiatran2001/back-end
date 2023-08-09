import express from "express";
import {
  getProductDetail,
  getIdProductDetail,
  createProductDetail,
  removeProductDetail,
  updateProductDetail,
} from "../controllers/Product.js";

const router = express.Router();

router.post("/addProductDetail", createProductDetail);
router.get("/getList", getProductDetail);
router.get("/:id", getIdProductDetail);
router.delete("/:id", removeProductDetail);
router.put("/:id", updateProductDetail);

export default getProductDetail;
