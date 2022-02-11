import './App.css';
import {useState, useEffect} from 'react';
import Login from './Login';
import LandingPage from './LandingPage';
import {getTokenFromResponse} from "./authenticator"

function App() {
  const [accessToken,setAccessToken] = useState(null);
  useEffect(()=>{
    const hash=getTokenFromResponse();
    const token=hash.access_token;
    window.location.hash="";
    if(token){
      setAccessToken(token);
    }
  },[]);
  return (
    <div className="App">
      {accessToken ? <LandingPage accessToken={accessToken}/> : <Login/>} 
    </div>
  );
}


export default App;
