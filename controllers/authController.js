const bcrypt = require("bcrypt");
const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

let arrayRefreshToken = [];

const register = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, salt);
    const findEmail = await User.findOne({ email: req.body.email });
    if (findEmail) {
      return res.status(404).json("Email already axsist");
    } else {
      //create user\
      const newUser = await new User({
        name: req.body.name,
        email: req.body.email,
        password: hashed,
        phone: req.body.phone,
      });
      //save to DB
      const user = await newUser.save();
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//generate Access Token
const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      role: user.role,
    },
    process.env.ACCESS_KEY,
    { expiresIn: "1d" }
  );
};

//generate Access Token
const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      role: user.role,
    },
    process.env.REFRESH_KEY,
    { expiresIn: "365d" }
  );
};

///Login user
const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json("Wrong email");
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(404).json("Wrong password");
    }
    if (user && validPassword) {
      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);
      arrayRefreshToken.push(refreshToken);
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
        path: "/",
        sameSite: "strict",
      });
      const { password, ...others } = user._doc;
      res.status(200).json({ ...others, accessToken });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//Request Refresh Token
const requestRefreshToken = async (req, res) => {
  //Take refreshToken from user
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return res.status(401).json("You are not authenticated!!!");
  }
  if (!arrayRefreshToken.includes(refreshToken)) {
    return res.status(403).json("Refresh token is not valid");
  }
  jwt.verify(refreshToken, process.env.REFRESH_KEY, (err, user) => {
    if (err) {
      console.log(err);
    }
    arrayRefreshToken = arrayRefreshToken.filter(
      (token) => token !== refreshToken
    );
    //create new accessToken, refreshToken
    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);
    arrayRefreshToken.push(newRefreshToken);
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: false,
      path: "/",
      sameSite: "strict",
    });
    res.status(200).json({ accessToken: newAccessToken });
  });
};

///Login user
const logout = async (req, res) => {
  res.clearCookie("refreshToken");
  arrayRefreshToken = arrayRefreshToken.filter(
    (token) => token !== req.cookies.refreshToken
  );
  res.status(200).json("Logged out!!!");
};

module.exports = { register, login, requestRefreshToken, logout };
