const express = require("express");
const {
  getAllUser,
  deleteUser,
  updateUser,
} = require("../controllers/UserController");
const { verifyToken, verifyTokenAdmin } = require("../middlewares/middleware");

const router = express.Router();

router.get("/alluser", verifyToken, getAllUser);
router.delete("/:id", verifyTokenAdmin, deleteUser);
router.put("/:id", verifyToken, updateUser);

module.exports = router;
