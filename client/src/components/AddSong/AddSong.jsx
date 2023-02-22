import React, { useState, useEffect} from 'react'
import axios from "axios";
import firebaseApp from '../../firebase/firebase';
import {Link,useParams, useNavigate} from 'react-router-dom'
import Song from '../Song/Song';
import './AddSong.css'

function AddSong() {

    const {id} = useParams();
    const navigate = useNavigate();

    const [playlistid, setPlaylistid] = useState('');
    const [track_title, setTrack_title] = useState('');
    const [songid, setSongid] = useState('');
    const [display, setDisplay] = useState([]);

    var user = firebaseApp.auth().currentUser.email;

    useEffect(() => {

        axios.get('http://localhost:3001/api/playlists/' + id).then((res) => {
            console.log(res.data.data.toString());
            setPlaylistid(res.data.data.toString());
        });

    }, []);

    const delete_playlist = (event) => {

        var user_email = firebaseApp.auth().currentUser.email;
        console.log(user_email);

        axios.delete('http://localhost:3001/api/playlists/' + playlistid, {email: user_email}).then((res) => {
            console.log(res.data);
            
        })
        event.preventDefault()
    }

    const add_song = async (event) => {
        await axios.post('http://localhost:3001/api/songs/add-song', {playlistid, track_title}).then((res) => {
            console.log(res.data.data)
            setDisplay(arr => [...arr, track_title])
            setSongid(res.data.data.songs[0]);
        })
        event.preventDefault()
    }


    return (
        <div className='adam'>

            <h2>{id}</h2>

            <form>
                <input type='text' value={track_title} onChange={(e) => setTrack_title(e.target.value)} placeholder='Add Song...'/>
                <input type="button" value="Submit" onClick={add_song}/>
            </form>


            <ul className="responsive-table">
                <li className="table-header">
                    <div className="col col-1">SONG</div>
                    <div className="col col-2">DELETE</div>
                </li>

                {display ? display.map((item, index) => {
                    return (

                        <Song key={index} name={item} track={songid} playlist={id} user={user}/> 

                    );
                }): null}
            </ul>


            <Link to={'/dashboard'}>Return</Link>

            <Link to={'/dashboard'}><button onClick={delete_playlist}>Delete Playlist</button></Link>

            
             
            

        </div>
    )
}

export default AddSong; 


{/* <div class="container">
  <h2>Playlist</h2>
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1">SONG</div>
      <div class="col col-2">DELETE</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Job Id">Food</div>
      <div class="col col-2" data-label="Customer Name">+</div>
    </li>
  </ul>
</div> */}