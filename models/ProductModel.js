const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, lowercase: true },
    image: { type: Array },
    quantity: { type: Number, required: true },
    originPrice: { type: Number, required: true },
    sellPrice: { type: Number, required: true },
    brand: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
