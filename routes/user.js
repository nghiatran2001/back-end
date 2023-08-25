const express = require("express");
const { getAllUser, deleteUser } = require("../controllers/UserController");
const { verifyToken, verifyTokenAdmin } = require("../middlewares/middleware");

const router = express.Router();

router.get("/alluser", verifyToken, getAllUser);
router.delete("/:id", verifyTokenAdmin, deleteUser);

module.exports = router;
