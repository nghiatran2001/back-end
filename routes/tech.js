const express = require("express");
const { addTech } = require("../controllers/TechController");

const router = express.Router();

router.post("/add", addTech);

module.exports = router;
