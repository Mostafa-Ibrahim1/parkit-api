const ParkingSlot = require("../../models/ParkingSlot");

exports.getAvailableNearestParkingSlot = async (req, res, next) => {
  try {
    const parkingSlot = await ParkingSlot.findOne({ available: true });

    if (!parkingSlot) {
      return res.status(404).send({
        success: false,
        message: "No available slots right now sorry!",
      });
    }

    res.status(200).send({
      success: true,
      message: `${parkingSlot.slot} is available!`,
    });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};
