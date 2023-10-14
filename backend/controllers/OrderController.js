const User = require("../models/User");
const Cart = require("../models/Cart");
const Order = require("../models/Order");
const sendEmailOrder = require("../utils/email");

// get all orders
const getAllOrder = async (req, res, next) => {
  try {
    const { userId, userRole } = req;

    // if admin return all orders
    if (userRole === "Admin") {
      const orders = await Order.find()
        .populate(["userId", "items.productId"])
        .exec();
      res.status(200).json({
        status: 1,
        message: "Fetch all order successfully!",
        result: orders,
      });
    } else {
      const orders = await Order.find({ userId: userId })
        .populate(["userId", "items.productId"])
        .exec();
      res.status(200).json({
        status: 1,
        message: "Fetch all order successfully!",
        result: orders,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// save order to database and send an email to user
const completeOrder = async (req, res, next) => {
  try {
    const { userId } = req;
    const { address, phonenumber } = req.body;

    const userDoc = await User.findById(userId);

    const cart = await Cart.findOne({ userId });
    const order = new Order({
      userId: userId,
      items: cart.items,
      deliveryAddress: address,
      phonenumber: phonenumber,
      total: cart.subTotal,
    });

    // update user data
    userDoc.address = address;
    userDoc.phonenumber = phonenumber;

    // empty cart
    const currentOrder = await order.save();
    cart.items = [];
    cart.subTotal = 0;

    await cart.save();
    await userDoc.save();

    sendEmailOrder(currentOrder._id);

    res.status(201).json({
      status: 1,
      message: "Order successfully!",
      result: currentOrder,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  completeOrder,
  getAllOrder,
};
