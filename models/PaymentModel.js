const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    order: { type: Array },
    email: { type: String },
    phone: { type: Number },
    name: { type: String },
    address: { type: String },
    content: { type: String },
    total: { type: String },
    status: { type: String, default: "Đang xử lý" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
