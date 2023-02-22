import React, { useEffect, useState} from 'react'
import axios from 'axios';
import firebaseApp from '../../firebase/firebase';
import PlayList from '../PlayList/PlayList';
import './AddPlaylist.css'
import {localStorage} from 'react-dom';
import Table from '../Table'

function AddPlaylist() {

    const [playlist, setPlaylist] = useState({
        name: '',
        desc: ''
    });
    
    const [user, setUser] = useState('');
    const [playlists, setPlaylists] = useState([]);

    function handleChange(event) {
        const { name, value } = event.target;
    
        setPlaylist(prevNote => {
          return {
            ...prevNote,
            [name]: value
          };
        });
      }



    useEffect(() => {
        var user_email = firebaseApp.auth().currentUser.email;
        console.log(user_email);
    
        axios.post('http://localhost:3001/api/users/login', {email: user_email}).then((res) => {
          console.log(res.data._id);
          setUser(res.data._id);
        })
    }, [])

    const create_playlist = async (event) => {
        axios.post('http://localhost:3001/api/playlists/create', {user: user, name: playlist.name, desc: playlist.desc}).then((res) => {
            console.log(res.data.data.name);
            setPlaylists(arr => [...arr, res.data.data.name]);
        })
        console.log(playlists)
        event.preventDefault();
    }

    return (
      <div>

        <Table/>

        <div>
            <form className='create-note' onSubmit={create_playlist}>
                <input type='text' name='name' value={playlist.name} onChange={handleChange}/>
                <textarea type='text' name='desc' value={playlist.desc} onChange={handleChange}/>
                <button type='submit'>Confirm</button>
            </form>
        </div>
                      
        <div>
          {playlists ? playlists.map((item, index) => {
              return (

                  <PlayList key={index} name={item} desc={playlist.desc}/> 

              );
            }): null}
        </div>

      </div>
    )
}

export default AddPlaylist;
