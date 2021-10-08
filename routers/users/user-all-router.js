const {
  readProfile,
  updateProfile,
} = require("../../controllers/users/user-all-controller");
const router = require("express").Router();

router.route("/profile").get(readProfile).put(updateProfile);

module.exports = router;
