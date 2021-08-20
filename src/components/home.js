import React, {useState} from 'react';
import axios from 'axios';
import '../App.css';
import AlbumSort from './sortAlbum/index';
import TransitionsModal from '../modalCreatePlaylist/index';
import { useSelector } from 'react-redux';


function Home() {
  const {accessTokenBearer} = useSelector((state) => state.token)
  
  const [searchKeyword, setSearchKeyword] = useState()
  const [trackData, setTrackData] = useState()
  const [selectedTrack, setSelectedTrack] = useState([])

  
  //cek dah masuk apa belom
  const renderAuthenticBtn = () => {
    return (
        <div >
          <div className="navBar">
            <h1 className="navBrand">Moosick</h1>
            <div className="searchContainer">
              <input  onChange={handleSetSearchKey} />
              <button type="submit" onClick={handleSearchPlaylist}>submit</button>
            </div>
          </div>
          <ul>
            <li><a className="active" href="./create-playlist">Home</a></li>
            <li><a href="/create">Create Playlist</a></li>
            <TransitionsModal/>
            <li className="logout"><a href="/">Logout</a></li>
          </ul>
        </div>
      )
  }

  const handleKeySpace = (keyword) => {
    const keywordString = keyword.replace(" ","+")
    return keywordString
  }

  const handleSetSearchKey = (e) => {
    setSearchKeyword(handleKeySpace(e.target.value))
  }

  const handleSearchPlaylist = async () => {
    await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        'Authorization' : `Bearer ${accessTokenBearer}`,
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      params: {
        api_key: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
        q: searchKeyword,
        type: "track",
        limit: 12
      },
    })
    .then((res) => {
      setTrackData(res.data.tracks.items)
    })
  }

 

  const handleSelectTrack = (trackData) => {
    if (selectedTrack.includes(trackData)) {
      setSelectedTrack([
        ...selectedTrack.filter((uri) => uri !== trackData),
      ]);
    }else {
      setSelectedTrack([...selectedTrack, trackData]);
    }
  }

  const renderShowTracksPage = () => {
    let renderShowPage = (
        <div>
          <div>
            <div className="cont-lagu">
              {trackData && 
              trackData.map((track) => {
                return(
                  <AlbumSort key={track.id} images={track.album.images[1].url} name={track.name} artists={track.artists[0].name}
                  isSelected={selectedTrack.includes(track.uri)}
                  onSelect={() => handleSelectTrack(track.uri)}
                 />
                )
              })}
            </div>
            <div>
              
            </div>
          </div>
        </div>
      )
      return renderShowPage
  }

  return (
    <div className="App">
      {renderAuthenticBtn()}
      {renderShowTracksPage()}
    </div>
  );
}

export default Home;
