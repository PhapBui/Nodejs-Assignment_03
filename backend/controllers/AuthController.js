const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(422)
        .json({ result: errors.array(), message: "Validation failed!" });
    }

    const { email, password } = req.body;
    const loadedUser = await User.findOne({ email });
    if (!loadedUser) {
      return res.status(401).json({
        result: [],
        message: "A user with this email could not be found!",
      });
    }
    const isMatchPassword = await bcrypt.compare(password, loadedUser.password);

    if (!isMatchPassword) {
      return res
        .status(401)
        .json({ result: [], status: 0, message: "Wrong password!" });
    }

    const token = jwt.sign(
      {
        email: loadedUser.email,
        userId: loadedUser._id.toString(),
      },
      "apploadertoken",
      { expiresIn: "24h" }
    );
    loadedUser.password = null;
    return res.status(200).json({
      result: { token, user: loadedUser },
      status: 1,
      message: "Login successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ result: error, status: 0, message: "Server error" });
  }
};

const signup = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        result: errors.array(),
        status: 0,
        message: "Validation failed!",
      });
    }
    const { email, fullName, password } = req.body;

    const hashPw = await bcrypt.hash(password, 16);

    const user = new User({ email, fullName, password: hashPw });

    const savedUser = await user.save();
    res
      .status(201)
      .json({ message: "User created", status: 1, result: savedUser });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const addToCart = async (req, res, next) => {
  try {
    const { userId } = req;
    const { cart } = req.body;
    const currentUser = await User.findById(userId);
    if (!currentUser) {
      return res
        .status(404)
        .json({ status: 0, message: "Can not find user", result: [] });
    }
    currentUser.cart = cart;

    const userSaved = await currentUser.save();

    res.status(200).json({
      status: 1,
      message: "Add to cart successfully",
      result: userSaved,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Internal Error" });
  }
};

module.exports = {
  login,
  signup,
  addToCart,
};
