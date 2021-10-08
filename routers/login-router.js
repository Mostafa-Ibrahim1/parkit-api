const { logIn } = require("../controllers/signup-login-controller");
const router = require("express").Router();

router.route("/").post(logIn);

module.exports = router;
