import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './SplashPage.css';

const SplashPage = () => {
  const dispatch = useDispatch();
  const artists = useSelector(state => state.artist.allArtists);
  const [index, setIndex] = useState(0);
  const [artistName, setArtistName] = useState("Lofi McLoferson");
  const [artistLocation, setArtistLocation] = useState('New York');
  const [artistProfileImg, setArtistProfileImg] = useState('https://montessorimuddle.org/wp-content/uploads/2020/12/lofi_cali_girl_meme_by_yuumei_de4uk12-490.png')
  const defaultArtist = {
    name: "Lofi McLoferson",
    location: "New York",
    profileImageUrl: "https://montessorimuddle.org/wp-content/uploads/2020/12/lofi_cali_girl_meme_by_yuumei_de4uk12-490.png"
  }

  useEffect(() => {
    const interval = setTimeout(() => {
      setArtistName(artists[index].name)
      setArtistLocation(artists[index].location)
      setArtistProfileImg(artists[index].profileImageUrl)
      if (index < artists.length - 1) {
        setIndex(index => index + 1)
      } else {
        setIndex(0)
      }
    }, 5000);
    return () => clearTimeout(interval)
  }, [artists, index])

  if (!artists) {
    return null;
  };

  return (
    <div className='splash-page' style={{"backgroundImage": `url(${artistProfileImg})`}}>
      <div className='splash-hooks'>
        <h1>Listen your way.</h1>
        <p>Whether listening to relax, focus on work, or anywhere in between...</p>
        <p>Lofidelity is the hub for all things Lofi!</p>
      </div>
      <div className='splash-auth-buttons'>
        <button>
          <Link to='/signup'>Sign up for free</Link>
        </button>
        <button>
          <Link to='/login'>Already have an account? Log in</Link>
        </button>
      </div>
      <div className='artist-credentials'>
        <p>Artist Name: {artistName}</p>
        <p>Artist Location: {artistLocation}</p>
      </div>
    </div>
  );
};

export default SplashPage;
