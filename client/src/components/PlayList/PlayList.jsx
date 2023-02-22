import React from "react";
import {Link} from 'react-router-dom'
import './PlayList.css';

//import DeleteIcon from "@material-ui/icons/Delete";

function PlayList(props) {


  return (
    <div className="note">
    <Link to={'/add-songs/' + props.name}>
      <h1>{props.name}</h1>
      <p>{props.desc}</p>
    </Link>
    </div>
  );
}

export default PlayList;
