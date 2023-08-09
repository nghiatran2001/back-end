import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Product from "./routes/Product.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(
  cors({
    origin: ["http://localhost:3001"],
    credentials: true,
  })
);

app.use("/Product", Product);

const URI = "mongodb://127.0.0.1:27017/laptop";
mongoose
  .connect(process.env.MONGODB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DataBase");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
