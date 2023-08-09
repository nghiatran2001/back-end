import express from "express";
import {
  getCategory,
  createCategory,
  getIdCategory,
  removeCategory,
  updateCategory,
} from "../controllers/Category.js";

const router = express.Router();

router.post("/addCategory", createCategory);
router.get("/getList", getCategory);
router.get("/:id", getIdCategory);
router.delete("/:nameCategory", removeCategory);
router.put("/:id", updateCategory);

export default getCategory;
