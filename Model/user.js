import mongoose from "mongoose";

const user = mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    phone: String,
    role: { default: false, type: Boolean },
    disable: { default: false, type: Boolean },
  },
  { timestamps: true }
);

export default mongoose.model("users", user);
