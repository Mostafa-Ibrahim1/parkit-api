const ParkingSlot = require("../../models/ParkingSlot");
const Vehicle = require("../../models/Vehicle");
const errorHandler = require("../../Utils/errorHandler");
const nowTime = require("../../Utils/nowTime");
//check availability controller

//put
exports.reserveSlot = async (req, res, next) => {
  try {
    const parkingSlot = await ParkingSlot.findOne({ available: true });

    if (!parkingSlot) {
      return res.status(404).send({
        success: false,
        message: "No available slots right now sorry!",
      });
    }
    //Here add the driver

    const vehicle = await Vehicle.create(req.body);
    vehicle.startTime = nowTime();
    vehicle.parkingSlot = parkingSlot.id;
    await vehicle.save();

    await ParkingSlot.updateOne(
      parkingSlot,
      { available: false },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Nearest slot reserved successfully!",
      reservedSlot: parkingSlot.slot,
      ParkedCar: vehicle.carDescription,
    });
  } catch (error) {
    const errorMessage = errorHandler(error);
    if (!errorMessage) {
      res.status(500).json({ success: false });
    } else {
      res.status(400).json({ success: false, error: errorMessage });
    }
  }
};
