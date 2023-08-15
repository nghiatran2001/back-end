const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController.js");

router.post("/", userController.createUser);

module.exports = router;
