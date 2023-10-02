const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const { mongodbUrl } = require("./constants/constants");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/", (req, res, next) => {
  res.status(200).json({});
});

mongoose
  .connect(mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(5000, () => console.log("App Started"));
  })
  .catch((err) => {
    console.log(err);
  });
