const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    nameProduct: { type: String, required: true, unique: true },
    slug: { type: String, required: true, lowercase: true },
    image: { type: Array },
    quantity: { type: Number, required: true },
    originPrice: { type: Number, required: true },
    sellPrice: { type: Number, required: true },
    brand: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
