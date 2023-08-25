const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_CONNECT)
    .then(() => {
      console.log("CONNECT TO MONGODB SUCCESS");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = dbConnect;
