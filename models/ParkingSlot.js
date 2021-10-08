const mongoose = require("mongoose");
const parkingSlotSchema = new mongoose.Schema(
  {
    slot: { type: String, required: true },
    available: { type: Boolean, default: true },
    floor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "floor",
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
parkingSlotSchema.virtual("vehicle", {
  ref: "vehicle",
  localField: "_id",
  foreignField: "parkingSlot",
});

const ParkingSlot = mongoose.model("parking-slot", parkingSlotSchema);

module.exports = ParkingSlot;
