const User = require("../../models/User");
exports.readProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select([
      "-password",
      "-_id",
      "-__v",
    ]);

    res.status(201).send({ success: true, user: user });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};
exports.updateProfile = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.user.id, req.body, {
      new: true,
    }).select(["-password", "-_id", "-__v"]);

    res.status(200).send({ success: true, user: user });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};
