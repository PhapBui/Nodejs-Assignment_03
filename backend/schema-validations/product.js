const { checkSchema } = require("express-validator");

const Category = require("../models/Category");

const categories = await Category.find().select("name");
console.log(categories);

const createProductSchema = checkSchema({
  name: {
    errorMessage: "Please enter product name",
    notEmpty: true,
  },
  images: {
    errorMessage: "Please enter product images",
    notEmpty: true,
  },
  price: {
    optional: {
      options: { checkFalsy: true },
    },
    isDecimal: {
      errorMessage: "The product price must be a decimal",
    },
  },
  category: {
    errorMessage: "Please enter product name",
    notEmpty: true,
    isIn: categories,
  },
  short_desc: {
    errorMessage: "Please enter product name",
    notEmpty: true,
  },
  long_desc: {
    errorMessage: "Please enter product name",
    notEmpty: true,
  },
  quantity: {
    errorMessage: "Please enter product name",
    isInt: { bail: true, options: { min: 0 } },
    notEmpty: true,
  },
});

module.exports = {
  createProductSchema,
};
