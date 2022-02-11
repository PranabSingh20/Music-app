import React, {useState, useContext} from 'react';
import "../Styles/MainContainer.css"
import { SongContext } from '../SongContext';
import Player from './Player';
function MainContainer({accessToken}) {
  const [songs, setSongs] = useContext(SongContext);
  const [playingTrack, setPlayingTrack] = useState();
  function play(track) {
    setPlayingTrack(track);
    console.log(track.title);
    var audio = document.getElementById('audio');
    audio.play();
  }
  return <div className="MainContainer">
      <div className="songsContainer">
        {songs.map((track)=>{
          return (<div key={track.uri} style={{display: 'flex', cursor: 'pointer', padding:"20px"}} onClick={()=>play(track)}>
            <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
            <div className="songname" style={{marginLeft:"10px", padding: "5px"}}>
              <div>{track.title}</div>
              <div style={{fontWeight:100}}>{track.artist}</div>
            </div>
          </div>)
        })}
      </div>
      <div className="Player">
      <Player accessToken={accessToken} trackUri="spotify:track:2Q6Eo7zJ3woi7oVUkfDt1W" />
      </div>
  </div>;
}

export {MainContainer};
