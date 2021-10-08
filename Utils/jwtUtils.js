const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config({ path: "../.env" });

exports.createNewToken = (user) => {
  const token = jwt.sign(
    { id: user.id, role: user.role },
    `${process.env.JWT_KEY}`,
    { expiresIn: "30d" }
  );
  return token;
};

exports.verifyToken = (token) => {
  const match = jwt.verify(token, `${process.env.JWT_KEY}`);
  return match;
}; //needs a catch
