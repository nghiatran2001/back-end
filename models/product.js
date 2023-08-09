import mongoose from "mongoose";
const Product = mongoose.Schema(
  {
    idCategory: String,
    nameProduct: String,
    description: String,
    picture: String,
    originPrice: String,
    sellPrice: String,
    quantity: String,
  },
  { timestamps: true }
);
export const ProductModel = mongoose.model("product", Product);
