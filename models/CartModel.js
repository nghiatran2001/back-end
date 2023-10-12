const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    idProduct: { type: String },
    email: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
