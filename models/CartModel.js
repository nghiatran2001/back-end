const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    idProduct: { type: String },
    email: { type: String },
    quantity: { type: Number },
    disable: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
