import React, {useState, useEffect, useRef} from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';


// Render a YouTube video player
function Player({albumId}) {
  const artist = useSelector((state) => state.session.sessionArtist)
  const songs = useSelector((state) => state.album.songsByAlbumId[albumId])
  const [song, setSong] = useState(null)
  useEffect(()=>{
    if (!songs) return

    setSong(songs[0])
  }, [songs])

  // const songs = useSelector((state) => state.album.songsByAlbumId)
  // const songsArr=Object.values(songs)[0]
  // // [url, setUrl]
  // let timeout = useRef(null)
  // useEffect(()=>{
  //   if (!songsArr) return

  //   setSong(songsArr[2])
  // }, [songsArr])

  // useEffect(()=>{
  //   timeout.current=setTimeout(()=> {
  //     setSong(songsArr[0])
  //   }, 5000)
  //   return ()=> clearTimeout(timeout.current)
  // }, [songsArr])

  return (
    <ReactPlayer url={song?.audioUrl} controls width='376px' height='52px' />
  );
}

export default Player;
