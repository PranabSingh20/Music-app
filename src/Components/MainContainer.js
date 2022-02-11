import React, {useState, useContext, useEffect} from 'react';
import "../Styles/MainContainer.css"
import { SongContext } from '../SongContext';
import Player from './Player';
import axios from "axios";
function MainContainer({accessToken}) {
  const [songs, setSongs] = useContext(SongContext);
  const [playingTrack, setPlayingTrack] = useState();
  const [lyrics, setLyrics] = useState("");
  const [search, setSearch] = useState(0);
  function play(track) {
    setPlayingTrack(track);
    setSearch(1);
  }
  // console.log("Currently playing ",playingTrack.title);
  useEffect(() => {
    if (!playingTrack) return
    axios
      .get("https://lyric-finder-backend.herokuapp.com/lyrics", {
        params: {
          track: playingTrack.title,
          artist: playingTrack.artist,
        },
      })
      .then(res => {
        setLyrics(res.data.lyrics);
      })
  }, [playingTrack])
  return <div className="MainContainer">
          <div className="Musicbox">
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
              <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
            </div>
          </div>
          <div className="lyrics">
          {search === 1 ? (
            <div style={{ whiteSpace: "pre" }}>
              {lyrics}
            </div>) : null}</div>
        </div>;
}

export {MainContainer};
