import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './SplashPage.css';

const SplashPage = () => {
  const dispatch = useDispatch();
  const artists = useSelector(state => state.artist.allArtists)

  let backgroundImgs = [];
  artists.forEach(artist => {
    backgroundImgs.push(artist.profileImageUrl)
  })


  return (
    <div className='splash-page'>
      {/* This is the Splash Page! */}
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
    </div>
  );
};

export default SplashPage;
