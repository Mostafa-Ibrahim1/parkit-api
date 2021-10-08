const router = require("express").Router();
const {
  displayFloor,
  displayAllFloors,
  displayParkingSlot,
  displayAllParkingSlots,
  displayVehicle,
  displayAllVehicles,
} = require("../../controllers/vehicle-slot-floor-display/display-controller");
//will be mounted on api/v1/display
router.route("/floor/:floor").get(displayFloor);
router.route("/floor").get(displayAllFloors); //All floors
router.route("/parkingSlot/:parkingSlot").get(displayParkingSlot); //Slot
router.route("/parkingSlot").get(displayAllParkingSlots); //All slots
router.route("/vehicle/:licensePlate").get(displayVehicle); //Vehicle by license plate
router.route("/vehicle").get(displayAllVehicles); //All Vehicles

module.exports = router;
