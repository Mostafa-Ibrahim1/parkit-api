const Floor = require("../../models/Floor");
const ParkingSlot = require("../../models/ParkingSlot");
const makeFloor = require("../../Utils/tools");
const errorHandler = require("../../Utils/errorHandler");
//floor by floor
exports.createFloor = async (req, res, next) => {
  try {
    const floor = await Floor.create({
      floorNumber: req.body.floorNumber,
      slotsNumber: req.body.slotsNumber,
    });
    const floorSlots = makeFloor(floor.slotsNumber, floor.floorNumber);
    for (let index = 0; index < floorSlots.length; index++) {
      const parkingslot = await ParkingSlot.create({
        slot: floorSlots[index],
        floor: floor.id,
      });
    }
    res
      .status(201)
      .send({ success: true, message: "Floor Created Successfully!" });
  } catch (error) {
    const errorMessage = errorHandler(error);
    if (!errorMessage) {
      res.status(500).json({ success: false });
    } else {
      res.status(400).json({ success: false, error: errorMessage });
    }
  }
};

//(params)delete by floor number
exports.deleteFloor = async (req, res, next) => {
  try {
    const floor = await Floor.findOne({
      floorNumber: req.params.floor,
    });
    if (!floor) {
      return res
        .status(404)
        .send({ success: false, message: "Floor not found!" });
    }
    await floor.remove();
    res.send({
      success: true,
      message: `Floor ${req.params.floor} deleted successfully!`,
    });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};
