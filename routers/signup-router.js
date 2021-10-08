const { signUp } = require("../controllers/signup-login-controller");
const router = require("express").Router();

router.route("/").post(signUp);

module.exports = router;
