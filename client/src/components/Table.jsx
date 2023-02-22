import React, {useEffect, useState} from 'react'
import axios from 'axios';

function Table() {

    const [data, setData] = useState([{}]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/tracks').then((response) => {
          setData(response.data);
        });
      }, []);

      if (!data) return null;

      const renderUsers = () => {

        return data.slice(0, 10).map(({ album_title, track_duration, track_id, track_title }) => {
          return (
            <tr key={track_id}>
                <td class="lalign">{track_id}</td>
                <td class="lalign">{track_title}</td>
                <td class="lalign">{album_title}</td>
                <td class="lalign">{track_duration}</td>
            </tr>
          )
        })
      }

      const renderHeader = () => {
        return (
            <tr key={1}>
                <th><span>#</span></th>
                <th><span>Track</span></th>
                <th><span>Album</span></th>
                <th><span>Duration</span></th>
            </tr>
        )
      }

    return (
        <div id="wrapper">
            <table id="keywords" cellspacing="0" cellpadding="0">
                <thead>
                    {renderHeader()}
                </thead>
                <tbody>
                    {renderUsers()} 
                </tbody>
            </table>
        </div>
    )
}

export default Table;
