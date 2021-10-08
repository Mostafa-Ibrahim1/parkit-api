const User = require("../../models/User");
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ cardId: req.params.cardId });
    if (!user) {
      return res.status(404).json({ success: false, message: "Not found!" });
    }
    if (user.role === "Admin") {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized to do that action!" });
    }

    await User.findOneAndRemove({ cardId: req.params.cardId }).select([
      "-password",
      "-_id",
      "-__v",
    ]);

    res
      .status(200)
      .send({ success: true, message: "User Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};
exports.readAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}).select(["-password", "-_id", "-__v"]);
    if (!users) {
      return res.status(404).json({ success: false, message: "Not found!" });
    }
    res.status(200).json({ success: true, users: users });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};
exports.readUserByCardId = async (req, res, next) => {
  try {
    const user = await User.findOne({ cardId: req.params.cardId }).select([
      "-password",
      "-_id",
      "-__v",
    ]);
    if (!user) {
      return res.status(404).json({ success: false, message: "Not Found" });
    }
    res.status(200).json({ success: true, user: user });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};
