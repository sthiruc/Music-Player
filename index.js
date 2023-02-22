const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');
const csvtojson = require('csvtojson');


const usersRoute = require("./routes/user.route");
const songRoutes = require("./routes/song.route");
const playListRoutes = require("./routes/playlist.route");

const genre = './csv/genres.csv';
const track = './csv/raw_tracks.csv';
const artist = './csv/raw_artists.csv';

const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());     
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/userDB", {
dbName: 'userDB',    
useNewUrlParser: true});

app.get("/api/tracks", (req, res) => {
    csvtojson()
    .fromFile(track)
    .then((json) => {

        const newArray = json.map((data) => {
            return {

                'album_title':data.album_title,
                'track_duration':data.track_duration,
                'track_id': data.track_id,
                'track_title':data.track_title
            }
        })

        res.send(newArray);
    })
})


app.use("/api/users", usersRoute);
app.use("/api/songs", songRoutes);
app.use("/api/playlists", playListRoutes);


app.listen(3001, () => {console.log("Server running on port 3001")});
