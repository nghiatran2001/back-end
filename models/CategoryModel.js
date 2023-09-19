const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    nameCategory: { type: String, required: true },
    slug: { type: String, lowercase: true },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
