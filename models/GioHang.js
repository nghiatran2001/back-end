const mongoose = require("mongoose");

const giohang = new mongoose.Schema(
  {
    idProduct: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", giohang);
