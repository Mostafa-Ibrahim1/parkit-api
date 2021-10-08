const {
  deleteUser,
  readAllUsers,
  readUserByCardId,
} = require("../../controllers/users/user-admin-controller");

const router = require("express").Router();
router.route("/admin/users").get(readAllUsers);
router.route("/admin/user/:cardId").delete(deleteUser).get(readUserByCardId);

module.exports = router;
