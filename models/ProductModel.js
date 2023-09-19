const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    nameProduct: { type: String, required: true },
    slug: { type: String, lowercase: true },
    image: { type: String },
    quantity: { type: Number, required: true },
    originPrice: { type: Number, required: true },
    sellPrice: { type: Number, required: true },
    nameCategory: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
