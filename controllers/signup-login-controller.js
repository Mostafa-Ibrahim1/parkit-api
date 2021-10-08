const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { createNewToken } = require("../Utils/jwtUtils");
const errorHandler = require("../Utils/errorHandler");
exports.signUp = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    const token = createNewToken(user);
    res.status(201).send({ success: true, token: token });
  } catch (error) {
    const errorMessage = errorHandler(error);
    if (!errorMessage) {
      res.status(500).json({ success: false });
    } else {
      res.status(400).json({ success: false, error: errorMessage });
    }
  }
};

exports.logIn = async (req, res, next) => {
  try {
    const user = await User.findOne({ cardId: req.body.cardId });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Not Registered!Please signup first!",
      });
    }
    const match = await bcrypt.compare(req.body.password, user.password);
    if (match === false) {
      return res
        .status(400)
        .json({ success: false, message: "Unable to Login!" });
    } else {
      const token = createNewToken(user);
      return res.status(200).json({
        success: false,
        message: "Logged in successfully!",
        token: token,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.name });
  }
};
