const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  pos: { type: Number, required: true },
  team: { type: String, required: true },
  pts: { type: Number, required: true },
});

export const TeamModel = mongoose.model("Team", teamSchema);
