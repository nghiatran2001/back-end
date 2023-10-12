const express = require("express");

const { addCart, getAllCart } = require("../controllers/CartController");

const router = express.Router();

router.post("/add", addCart);
router.get("/getall", getAllCart);

module.exports = router;
