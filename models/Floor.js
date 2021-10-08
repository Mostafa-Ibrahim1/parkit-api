const mongoose = require("mongoose");
const ParkingSlot = require("./ParkingSlot");
const Vehicle = require("./Vehicle");
const floorSchema = new mongoose.Schema(
  {
    floorNumber: { type: Number, required: true },
    slotsNumber: { type: Number, required: true },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
floorSchema.virtual("parkingSlots", {
  ref: "parking-slot",
  localField: "_id",
  foreignField: "floor",
});

floorSchema.pre("remove", async function (next) {
  await ParkingSlot.deleteMany({});
  await Vehicle.deleteMany({});
  next();
});

const Floor = mongoose.model("floor", floorSchema);
module.exports = Floor;
