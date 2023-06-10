const mongoose = require("mongoose");

const raceSchema = new mongoose.Schema({
  grandPrix: { type: String, required: true },
  date: { type: Date, required: true },
  driver: { type: String, required: true },
  carName: { type: String, required: true },
  laps: { type: Number, required: true },
  time: { type: String, required: true },
});

export const RaceModel = mongoose.model("Race", raceSchema);
