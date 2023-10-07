const mongoose = require("mongoose");

const techSchema = new mongoose.Schema(
  {
    idProduct: { type: String },
    chip: { type: String },
    ram: { type: String },
    ssd: { type: String },
    monitor: { type: Number },
    os: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tech", techSchema);
