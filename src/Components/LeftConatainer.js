import {useState, useEffect, useContext} from 'react';
import "../Styles/LeftContainer.css";
import {FaMusic, FaEllipsisH, FaSearch} from 'react-icons/fa';
import SpotifyWebApi from "spotify-web-api-node";
import { SongContext } from '../SongContext';

const spotifyApi=new SpotifyWebApi();

function LeftConatainer({accessToken}) {
  const [search, setSearch]= useState("ap dhillon");
  const [searchResults, setSearchResults] = useContext(SongContext);
  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;
    spotifyApi.searchTracks(search).then(res => {
      if (cancel) return
      setSearchResults(
        res.body.tracks.items.map(track => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image
              return smallest
            },
            track.album.images[0]
          )
            console.log(track);
          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          }
        })
      )
    })

    return () => (cancel = true)
  }, [search, accessToken])

  return <div className='LeftContainer'>
    <div className='logoContainer'>
      <i style={{marginLeft:"10px"}}><FaMusic/></i>
      <h2 style={{marginLeft:"30px"}}>Groove</h2>
    </div>
    <div className='searchContainer'>
      <input type='text' placeholder='Search' onChange={e=>{setSearch(e.target.value)}}></input>
      <i className='searchIcon'><FaSearch/></i>
    </div>
  </div>;
}

export {LeftConatainer};
