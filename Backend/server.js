const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const cors = require("cors");

// Admin
const adminAuthRoute = require("./admin/routes/auth");
const adminUsersRoute = require("./admin/routes/user");
const adminProductRoute = require("./admin/routes/product");
const adminOrderRoute = require("./admin/routes/order");
// const adminCartRoute = require("./admin/routes/cart");

// User
const userRoute = require("./user/routes/user");
const authRoute = require("./user/routes/auth");
const cartRoute = require("./user/routes/cart");
const productRoute = require("./user/routes/product");

const port = process.env.PORT || 5001;

const app = express();

connectDB();

app.use(express.json());

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

//Admin Routes
app.use("/api/admin", adminAuthRoute);
app.use("/api/admin/users", adminUsersRoute);
app.use("/api/admin/products", adminProductRoute);
app.use("/api/admin/orders", adminOrderRoute);
// app.use("/api/admin/cart", adminCartRoute);

//User Routes
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/cart", cartRoute);
app.use("/api/product", productRoute);

app.use("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});
app.listen(5000, () => {
  console.log(`Listening on port ${port}`);
});
