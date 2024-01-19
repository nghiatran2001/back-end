const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const {
  addOrder,
  getAll,
  getId,
  updateOrder,
  cancelOrder,
} = require("../controllers/PaymentController");

const router = express.Router();

router.post("/add", addOrder);
router.get("/getall", getAll);
router.get("/:id", getId);
router.put("/:id", updateOrder);
router.put("/cancel/:id", cancelOrder);

router.get("/config", async (req, res) => {
  return res.status(200).json({
    status: "OK",
    data: process.env.CLIENT_ID,
  });
});

module.exports = router;
