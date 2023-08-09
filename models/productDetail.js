import mongoose from "mongoose";
const ProductDetail = mongoose.Schema(
  {
    idProduct: String,
    chip: String,
    ram: String,
    vga: String,
    ssd: String,
    monitor: String,
  },
  { timestamps: true }
);
export const ProductDetailModel = mongoose.model(
  "productDetail",
  ProductDetail
);
