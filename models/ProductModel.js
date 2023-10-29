const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    nameProduct: { type: String },
    slug: { type: String, lowercase: true },
    quantity: { type: Number },
    originPrice: { type: Number },
    sellPrice: { type: Number },
    nameCategory: { type: String },
    nameBrand: { type: String },
    description: { type: String },
    disable: { type: String, default: "Hoạt động" },
    image: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
