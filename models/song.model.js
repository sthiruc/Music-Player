const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
	track_id: { type: String },
    artist_id: { type: String },
    artist_name: { type: String },
    track_duration: { type: String },
    track_title: { type: String } 
});

const Song = mongoose.model("Song", songSchema);

module.exports = {Song}