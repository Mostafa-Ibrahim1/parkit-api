const {
  reserveSlot,
} = require("../../controllers/getavailable-reserve-checkout-slot/reserve-controller");
const {
  checkOutSlot,
} = require("../../controllers/getavailable-reserve-checkout-slot/checkout-controller");

const {
  getAvailableNearestParkingSlot,
} = require("../../controllers/getavailable-reserve-checkout-slot/getavailable-controller");
const router = require("express").Router();
router.route("/reserve").put(reserveSlot);
router.route("/checkout").put(checkOutSlot);
router.route("/available").get(getAvailableNearestParkingSlot);
module.exports = router;
