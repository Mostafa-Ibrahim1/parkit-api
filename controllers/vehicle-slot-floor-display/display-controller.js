const Floor = require("../../models/Floor");
const ParkingSlot = require("../../models/ParkingSlot");
const Vehicle = require("../../models/Vehicle");
//(params)read by floor number
exports.displayFloor = async (req, res, next) => {
  try {
    const floor = await Floor.findOne({
      floorNumber: req.params.floor,
    }).populate({ path: "parkingSlots", populate: { path: "vehicle" } });
    if (!floor) {
      return res
        .status(404)
        .send({ success: false, message: "Floor not found!" });
    }

    res.status(200).send({ success: true, floorDetails: floor });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};
exports.displayAllFloors = async (req, res, next) => {
  try {
    const floors = await Floor.find({}).populate({
      path: "parkingSlots",
      populate: { path: "vehicle" },
    });
    if (!floors) {
      return res
        .status(404)
        .send({ success: false, message: "Floors not found!" });
    }

    res.status(200).send({ success: true, floors: floors });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};

//-----------------------------------------------------------------------------

exports.displayParkingSlot = async (req, res, next) => {
  try {
    //req.params --> /:parkingSlot
    const parkingSlot = await ParkingSlot.findOne({
      slot: req.params.parkingSlot,
    })
      .populate("vehicle")
      .populate("floor");
    if (!parkingSlot) {
      return res
        .status(404)
        .send({ success: false, message: "Parking slot not found!" });
    }

    res.status(200).send({ success: true, parkingSlotDetails: parkingSlot });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};

exports.displayAllParkingSlots = async (req, res, next) => {
  try {
    // req.query.page
    //Pagination page only is provided
    if (req.query.page <= 0) {
      return res.send({ message: "Page should be of positive value" });
    }
    req.query.page = req.query.page - 1;
    const parkingSlots = await ParkingSlot.find({})
      .populate("vehicle")
      .populate("floor")
      .skip(req.query.page * 5)
      .limit(5);
    if (!parkingSlots) {
      return res
        .status(404)
        .send({ success: false, message: "Parking slots not found!" });
    }

    res.status(200).send({ success: true, parkingSlots: parkingSlots });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};

//-----------------------------------------------------------------------------

exports.displayVehicle = async (req, res, next) => {
  try {
    //req.params --> /:licensePlate
    const vehicle = await Vehicle.findOne({
      licensePlate: req.params.licensePlate,
    }).populate("parkingSlot");
    if (!vehicle) {
      return res
        .status(404)
        .send({ success: false, message: "Vehicle not found!" });
    }

    res.status(200).send({ success: true, vehicleDetails: vehicle });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};

exports.displayAllVehicles = async (req, res, next) => {
  try {
    // /:page
    //Pagination page only is provided in params req.params.page
    if (req.query.page <= 0) {
      return res.send({ message: "Page should be of positive value" });
    }
    req.query.page = req.query.page - 1;
    const vehicles = await Vehicle.find({})
      .populate("parkingSlot")
      .skip(req.query.page * 5)
      .limit(5);
    if (!vehicles) {
      return res
        .status(404)
        .send({ success: false, message: "Vehicles not found!" });
    }

    res.status(200).send({ success: true, vehicles: vehicles });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};
