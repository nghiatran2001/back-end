const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dbConnect = require("./config/dbConnect");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const authRoute = require("./routes/auth.js");
const userRoute = require("./routes/user.js");
const categoryRoute = require("./routes/category.js");
const productRoute = require("./routes/product.js");
const cartRoute = require("./routes/cart.js");

dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    Credential: true,
    origin: "http://localhost:3001",
  })
);

app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/category", categoryRoute);
app.use("/product", productRoute);
app.use("/cart", cartRoute);

app.listen(PORT, () => {
  console.log("Server is running in port: ", +PORT);
});
