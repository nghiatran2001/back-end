const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    nameProduct: { type: String, required: true, unique: true },
    picture: { type: String, required: true },
    originPrice: { type: Number, required: true },
    sellPrice: { type: Number, required: true },
    quantity: { type: Number, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
