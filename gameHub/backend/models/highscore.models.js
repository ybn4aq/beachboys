const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const highscoreSchema = new Schema(
  {
    username: { type: String, required: true},
    game: { type: String, required: true },
    score: { type: Number, required: true },
    _id: { type: String, required: true}
  }, {
    timestamps: true,
  }
);

const HighScore = mongoose.model('HighScore', highscoreSchema);

module.exports = HighScore;