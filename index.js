import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Posts from "./routes/Posts.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.use("/Posts", Posts);

const URI = "mongodb://127.0.0.1:27017/laptop";
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DataBase");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
