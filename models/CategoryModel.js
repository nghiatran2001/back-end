const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    nameCategory: { type: String },
    slug: { type: String, lowercase: true },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
