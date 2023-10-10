const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const { mongodbUrl } = require("./constants/constants");
require("dotenv").config();

const app = express();

// import router
const AuthRouter = require("./routes/AuthRoute");
const ProductRouter = require("./routes/ProductRoute");
const CategoryRouter = require("./routes/CategoryRoute");
const CartRouter = require("./routes/CartRoute");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/api", AuthRouter, ProductRouter, CategoryRouter, CartRouter);
// app.use("/api", AuthRouter);
// app.use("/api", ProductRouter);
// app.use("/api", CategoryRouter);
// app.use("/api", CartRouter);

mongoose
  .connect(mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(5000, () => console.log("App Started"));
  })
  .catch((err) => {
    console.log(err);
  });
