const express = require("express");
const { addProduct } = require("../controllers/ProductController");

const router = express.Router();

router.post("/add", addProduct);

module.exports = router;
