const express = require("express");
const { addOrder, getAll, getId } = require("../controllers/PaymentController");

const router = express.Router();

router.post("/add", addOrder);
router.get("/getall", getAll);
router.get("/:id", getId);

module.exports = router;
