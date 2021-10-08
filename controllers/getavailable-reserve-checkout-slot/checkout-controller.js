const ParkingSlot = require("../../models/ParkingSlot");
const Vehicle = require("../../models/Vehicle");
const calculateParkingFees = require("../../Utils/calculateParkingFees");
const nowTime = require("../../Utils/nowTime");

exports.checkOutSlot = async (req, res, next) => {
  try {
    const parkingSlot = await ParkingSlot.findOne({ slot: req.body.slot });
    if (!parkingSlot) {
      return res.status(404).send({ success: false, message: "No such slot" });
    }
    if (parkingSlot.available === true) {
      return res.send({ success: false, message: "Already empty!" });
    }
    await ParkingSlot.updateOne(
      parkingSlot,
      { available: true },
      { new: true }
    );

    const vehicle = await Vehicle.findOne({ parkingSlot: parkingSlot.id });
    const parkingFees = calculateParkingFees(vehicle.startTime, nowTime());
    await Vehicle.findOneAndRemove({ parkingSlot: parkingSlot.id });
    res.status(200).send({
      success: true,
      message: `Checked out from ${parkingSlot.slot} successfully`,
      fees: parkingFees,
    });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};
