const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is required!"], minlength: 2 },
  cardId: { type: String, unique: true },
  password: { type: String, required: [true, "Password is required!"] },
  role: {
    type: String,
    enum: ["Admin", "Moderator"],
  },
  nationalId: {
    type: String,
    required: [true, "National ID is required!"],
    unique: true,
    minlength: 14,
  },
  shiftType: {
    type: String,
    required: [true, "Shift type is required!"],
    enum: ["Day", "Night"],
  },
  workingDays: {
    type: String,
    required: [true, "Working days are required!"],
    enum: ["SMW", "STT", "F"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone Number is required!"],
    minlength: 11,
    unique: true,
  },
  secondPhoneNumber: { type: String, minlength: 11 },
});

userSchema.pre("save", function (next) {
  const user = this;
  bcrypt.hash(user.password, 8, (err, hash) => {
    if (err) {
      next(err);
    } else {
      user.password = hash;
      next();
    }
  });
});

const User = mongoose.model("user", userSchema);
module.exports = User;
