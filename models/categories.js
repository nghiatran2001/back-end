import mongoose from "mongoose";
const Category = mongoose.Schema(
  {
    nameCategory: String,
    description: String,
  },
  { timestamps: true }
);
export const CategoryModel = mongoose.model("category", Category);
