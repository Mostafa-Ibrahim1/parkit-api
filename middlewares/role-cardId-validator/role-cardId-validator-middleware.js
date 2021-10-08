// This is before the signUp
const roleCardIdValidator = (req, res, next) => {
  if (!req.body.cardId) {
    return res
      .status(401)
      .json({ success: false, message: "You must provide your Card ID" });
  }
  if (req.body.cardId.startsWith(200) && req.body.cardId.length === 8) {
    req.body.role = "Admin";
    next();
  } else if (req.body.cardId.startsWith(100) && req.body.cardId.length === 8) {
    req.body.role = "Moderator";
    next();
  } else {
    return res
      .status(401)
      .json({ success: false, message: "Card ID not valid" });
  }
};
module.exports = roleCardIdValidator;
