const express = require("express");

const orderController = require("../controllers/OrderController");
const isAuth = require("../middlewares/is-auth");
const { completeOrderSchema } = require("../schema-validations/order");

const router = express.Router();

router.get("/order", isAuth, orderController.getAllOrder);

router.post(
  "/order",
  completeOrderSchema,
  isAuth,
  orderController.completeOrder
);

module.exports = router;
