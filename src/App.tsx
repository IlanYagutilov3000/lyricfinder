import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  let [artist, setArtist] = useState<string>("");
  let [song, setSong] = useState<string>("");
  let [lyrics, setLyrics] = useState<string>("");

  function searchLyrics() {
    if (artist === "" || song === "") {
      alert("Please write something")
      return;
    }
    axios.get(
      `https://api.lyrics.ovh/v1/${artist}/${song}`).then(res => {
        setLyrics(res.data.lyrics)
        setArtist("");
        setSong("");
      }).catch((err) => console.log(err)
      );
  }


  return (
    <div className="App">
      <h1>Lyric Finder</h1>
      <input type="text" placeholder='Artist Name' onChange={(e) => { setArtist(e.target.value) }} value={artist} />
      <input type="text" placeholder='Song Name' onChange={(e) => { setSong(e.target.value) }} value={song} />
      <button onClick={() => searchLyrics()}>Serach</button>
      <pre>{lyrics}</pre>
    </div>
  );
}

export default App;
