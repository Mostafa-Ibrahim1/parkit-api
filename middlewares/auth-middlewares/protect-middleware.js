const { verifyToken } = require("../../Utils/jwtUtils");
const User = require("../../models/User");
const protect = async (req, res, next) => {
  //If there is a token
  const bearer = req.headers.authorization;
  if (!bearer) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  //Is it in the right format
  if (!bearer.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  } else {
    const token = bearer.split("Bearer ")[1];
    try {
      const payload = verifyToken(token);
      const user = await User.findById(payload.id);
      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "Unable to Login!" });
      } else {
        req.user = user;
        next();
      }
    } catch (e) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
  }
  //Is it a valid token
};

module.exports = protect;
