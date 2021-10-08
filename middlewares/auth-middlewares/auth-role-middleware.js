const roleAuth = (req, res, next) => {
  if (req.user.role === "Moderator") {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  } else {
    next();
  }
};

module.exports = roleAuth;
