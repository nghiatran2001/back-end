const express = require("express");
const {
  getAllUser,
  deleteUser,
  updateUser,
  getAUser,
  blockUser,
  openUser,
} = require("../controllers/UserController");
const { verifyToken, verifyTokenAdmin } = require("../middlewares/middleware");

const router = express.Router();

router.get("/alluser", getAllUser);
router.get("/:id", getAUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);
router.put("/block/:id", blockUser);
router.put("/open/:id", openUser);

module.exports = router;
