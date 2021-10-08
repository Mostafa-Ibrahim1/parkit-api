const {
  createFloor,
  deleteFloor,
} = require("../../controllers/floor-admin/floor-admin-controller");
const router = require("express").Router();
router.route("/admin/floor").post(createFloor);
router.route("/admin/floor/:floor").delete(deleteFloor);
module.exports = router;
