const mongoose = require("mongoose");

const playListSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    songs: { type: Array, default: [] },
    desc: { type: String }
});

const PlayList = mongoose.model("playList", playListSchema);

module.exports = {PlayList}