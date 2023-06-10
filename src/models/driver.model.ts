const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
  pos: { type: Number, required: true },
  driver: { type: String, required: true },
  nationality: { type: String, required: true },
  carName: { type: String, required: true },
  pts: { type: Number, required: true },
});

export const DriverModel = mongoose.model("Driver", driverSchema);
