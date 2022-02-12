import React from 'react';
import "./Login.css"
import {accessUrl} from "./authenticator"

function Login() {
  return <div>
      <div className="login">
        <img src="https://ak.picdn.net/shutterstock/videos/1030663952/thumb/1.jpg" alt="cool background image"></img>
        <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
      </div>
  </div>;
}

export default Login;
