const express = require("express");
const {
  createUser,
  loginUser,
  getAllUser,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
} = require("../controllers/UserController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/all-user", getAllUser);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.get("/:id", authMiddleware, getUser);
router.delete("/:id", deleteUser);
router.put("/update", authMiddleware, updateUser);
router.put("/block/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;
