const express = require("express");
const {
  register,
  login,
  requestRefreshToken,
  logout,
} = require("../controllers/authController");
const { verifyToken } = require("../middlewares/middleware");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.post("/refresh", requestRefreshToken);

router.post("/logout", verifyToken, logout);

module.exports = router;
