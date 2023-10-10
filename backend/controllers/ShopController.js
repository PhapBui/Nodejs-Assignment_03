const Product = require("../models/Product");

const addToCart = async (req, res, next) => {
  try {
    const { productId } = req.body;
    const productDoc = await Product.findById(productId);
  } catch (error) {}
};

const createNewOrder = async (req, res, next) => {
  try {
  } catch (error) {}
};

module.exports = {
  createNewOrder,
};
