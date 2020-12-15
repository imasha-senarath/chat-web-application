import React, { useState } from 'react';
import { Link } from "react-router-dom";

import logo from '../../images/logo.png';

import './join.css';


export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">iChat</h1>
        <h2 className="heading">Realtime Chat Service</h2>
        <p>Enter your name and room name</p>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Join</button>
        </Link>
        <div className="designer">
          <p>Designed by</p>
          <img alt="logo" src={logo} />
        </div>
      </div>
    </div>
  );
}
