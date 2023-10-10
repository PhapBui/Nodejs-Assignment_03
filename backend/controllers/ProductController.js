const Product = require("../models/Product");

const getAllProducts = async (req, res, next) => {
  try {
    const { cate } = req.query;
    const option = {};
    if (cate) option.category = cate;

    const products = await Product.find(option);

    res.status(200).json({
      message: "Fetch all products successfully!",
      status: 1,
      result: products,
    });
  } catch (error) {
    res.status(500).json({
      message: "Fetch all products failed!",
      status: 0,
    });
  }
};

const createNewProduct = async (req, res, next) => {
  try {
    const { name, images, price, category, short_desc, long_desc, quantity } =
      req.body;

    const product = {
      name,
      images,
      price,
      category,
      short_desc,
      long_desc,
      quantity,
    };
    const newProduct = new Product(product);
    const savedProduct = await newProduct.save();
    res.status(201).json({
      message: "Created new product successfully!",
      result: savedProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Fetch all products failed!",
      status: 0,
    });
  }
};

const updateProductById = async (req, res, next) => {
  try {
    const { name, images, price, category, short_desc, long_desc, quantity } =
      req.body;

    const { productId } = req.params;
    if (!productId) {
      return res.status(422).json({
        message: "Missing parameter",
        status: 0,
      });
    }

    const productDoc = await Product.findById(productId);

    if (!productDoc) {
      return res.status(404).json({
        message: "Product cant be found",
        status: 0,
      });
    }

    const product = {
      name,
      images,
      price,
      category,
      short_desc,
      long_desc,
      quantity,
    };

    const updatedProduct = await Product.findByIdAndUpdate(
      productDoc._id,
      product
    );

    res.status(201).json({
      message: "Created new product successfully!",
      result: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Fetch all products failed!",
      status: 0,
    });
  }
};

const getProductById = async (req, res, next) => {
  try {
    const { productId } = req.params;
    if (!productId) {
      return res.status(422).json({
        message: "Missing parameter",
        status: 0,
      });
    }
    const productDoc = await Product.findById(productId);
    if (!productDoc) {
      return res.status(404).json({
        message: "Product cant be found",
        status: 0,
      });
    }

    res.status(200).json({
      message: "Get product successfully!",
      result: productDoc,
      status: 1,
    });
  } catch (error) {
    res.status(500).json({
      message: "Fetch all products failed!",
      status: 0,
    });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProductById,
};
