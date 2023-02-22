const express = require('express')
const router = express.Router()
const { PlayList } = require("../models/playlist.model");
const {ObjectId} = require('mongodb');
const { User } = require("../models/user.model");
const { Song } = require("../models/song.model");

// create playlist
router.post("/create", async (req, res) => {

	try {
		const user = await User.findById(req.body.user);

		const playList = await PlayList({
			user: ObjectId(req.body.user), 
			name: req.body.name,
			desc: req.body.desc 
		}).save();

		user.playlists.push(playList._id);
		await user.save();

		res.status(200).send({ data: playList });
	} catch(err) {
		res.json({ status: 'error'})
	}

});

// get playlist id
router.get("/:id", async (req, res) => {
	try {
		const playLists = await PlayList.find({ name: req.params.id });
		res.status(200).send({ data: playLists[0]._id});
	} catch (err) {
		res.json({ status: 'error'})
	}

});

// delete playlist
router.delete('/:id', async (req, res) => {
	try {
		const playlist = await PlayList.findById(ObjectId(req.params.id));
		const user = await User.findById(playlist.user);

		const index = user.playlists.indexOf(req.params.id);
		user.playlists.splice(index, 1);
		await user.save();
		await playlist.remove();
		res.status(200).send({ message: "Removed from library" });
	} catch (err) {
		res.json({ status: 'error'})
	}

});

module.exports = router;