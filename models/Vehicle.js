const mongoose = require("mongoose");
const vehicleSchema = new mongoose.Schema({
  driverName: { type: String, required: [true, "Driver's name is required!"] },
  carDescription: {
    type: String,
    required: [true, "A Brief description of the car is required!"],
    minlength: 10,
  },
  licensePlate: {
    type: String,
    required: [true, "License Plate is required!"],
    unique: true,
  },
  driverNationalId: {
    type: String,
    required: [true, "Driver's national ID is required!"],
    minlength: 14,
    unique: true,
  },
  startTime: { type: Date },
  parkingSlot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "parking-slot",
  },
});
/*
{
  "driverName":"Jurgen",
  "carDescription":"Nissan Sunny Black",
  "licensePlate":"123AA",
  "driverNationalId":"12345678901234",

  
}
 */
const Vehicle = mongoose.model("vehicle", vehicleSchema);
module.exports = Vehicle;
