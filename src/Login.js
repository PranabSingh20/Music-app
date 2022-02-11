import React from 'react';
import "./Login.css"
import {accessUrl} from "./authenticator"

function Login() {
  return <div>
      <div className="login">
        <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="A radio image"></img>
        <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
      </div>
  </div>;
}

export default Login;
