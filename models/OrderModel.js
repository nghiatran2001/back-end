const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderArray: { type: Array },
    email: { type: String },
    total: { type: Number },
    disable: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
