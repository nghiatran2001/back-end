const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
  {
    nameBrand: { type: String },
    slug: { type: String, lowercase: true },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Brand", brandSchema);
