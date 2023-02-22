import axios from "axios";
import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import firebaseApp from '../../firebase/firebase';
import './Song.css';

function Song(props) {

    const playlist_id = props.playlist;
    const song_id = props.track;
    const user_id = props.user;

    const [deleteSong, setDeleteSong] = useState([props.name]);


    const delete_song = async () => {
        axios.post('http://localhost:3001/api/songs/remove-song', {user_id, playlist_id, song_id}).then((res) => {
            console.log(res);
            console.log(playlist_id);

            setDeleteSong(true);

            if (deleteSong) {
                window.location.reload();
            }
        })
    }



    /*

    function SongTable(props) {
        const songs = props.songs.filter(song => !song.deleted);
      
        return (
          <ul className="table">
            {songs.map(song => (
            ))}
          </ul>
        );
      }
      */

  return (

    <div>
        
        <li className="table-row">
            <div className="col col-1" data-label="Job Id">
                <button onClick={delete_song}>{props.name}</button>
                
            </div>
            <div className="col col-2" data-label="Customer Name">+</div>

        </li>
        
    </div>
  );
}

export default Song;

