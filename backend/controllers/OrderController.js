const User = require("../models/User");
const Cart = require("../models/Cart");
const Order = require("../models/Order");

const getAllOrder = async () => {
  try {
    const userId = req.userId;
    const userDoc = await User.findById(userId);

    if (userDoc.role === "Admin") {
      const orders = await Order.find();
      res
        .status(200)
        .json({
          status: 1,
          message: "Fetch all order successfully!",
          result: orders,
        });
    } else {
      const orders = await Order.find({ userId: userId });
      res
        .status(200)
        .json({
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

const completeOrder = async (req, res, next) => {
  try {
    const { userId } = req;
    const { address, phonenumber } = req.body;

    const userDoc = await User.findById(userId);

    const cart = await Cart.findOne({ userId }).select("items");

    const order = new Order({
      userId: userId,
      items: cart.items,
      deliveryAddress: address,
      phonenumber: phonenumber,
    });

    userDoc.address = address;
    userDoc.phonenumber = phonenumber;

    cart.items = [];

    await cart.save();
    await userDoc.save();
    const currentOrder = await order.save();
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
