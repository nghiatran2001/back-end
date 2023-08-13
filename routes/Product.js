import express from "express";
import {
  getProducts,
  getIdProduct,
  createProduct,
  removeProduct,
  updateProduct,
} from "../controllers/Product.js";

const router = express.Router();

router.post("/addProduct", createProduct);
router.get("/getList", getProducts);
router.get("/getId/:id", getIdProduct);
router.delete("/:nameProduct", removeProduct);
router.put("/:id", updateProduct);

export default getProducts;
