const User = require("../models/UserModel.js");

const createUser = (newUser) => {
  return new Promise(async (resolve, reject) => {
    const { nameUser, email, password, confirmPassword, phone } = newUser;
    try {
      const createUser = await User.create({
        nameUser,
        email,
        password,
        confirmPassword,
        phone,
      });
      if (createUser) {
        resolve({
          status: "OK",
          message: "SUCCESS",
          data: createUser,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = { createUser };
