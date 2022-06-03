import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './SplashPage.css';

const SplashPage = () => {
  const artists = useSelector(state => state.artist.allArtists);
  const [index, setIndex] = useState(0);
  const [artistName, setArtistName] = useState("Lofi McLoferson");
  const [artistLocation, setArtistLocation] = useState('New York');
  const [artistBackgroundImg, setArtistBackgroundImg] = useState('https://montessorimuddle.org/wp-content/uploads/2020/12/lofi_cali_girl_meme_by_yuumei_de4uk12-490.png')

  useEffect(() => {
    const interval = setTimeout(() => {
      setArtistName(artists[index].name)
      setArtistLocation(artists[index].location)
      setArtistBackgroundImg(artists[index].bgImageUrl)
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
    <div className='splash-page' style={{"backgroundImage": `url(${artistBackgroundImg})`}}>
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
