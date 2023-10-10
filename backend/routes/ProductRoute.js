const express = require("express");

const router = express.Router();
const isAuth = require("../middlewares/is-auth");

const ProductController = require("../controllers/ProductController");

// get all products
router.get("/product", ProductController.getAllProducts);
router.get("/product/:productId", ProductController.getProductById);
router.post("/product", isAuth, []);

module.exports = router;
