const mongoose = require("mongoose");

const lapSchema = new mongoose.Schema({
  grandPrix: { type: String, required: true },
  driver: { type: String, required: true },
  carName: { type: String, required: true },
  time: { type: String, required: true },
});

export const LapModel = mongoose.model("Lap", lapSchema);
