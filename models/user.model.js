const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		likedSongs: { type: [String], default: [] },
		playlists: { type: [String], default: [] },
		quote: { type: String },	},
	{ collection: 'user-data' }
)

const User = mongoose.model('User', userSchema)

module.exports = {User}

// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     playlists: { type: [String], default: []},
//     likedSongs: { type: [String], default: []}
// });

// const User = mongoose.model("User", userSchema);

// module.exports = {User}