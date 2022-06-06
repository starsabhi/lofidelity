import './SplashPage.css';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import FullPageModal from '../FullPageModal';
import SignUpChoice from '../SignUpChoice';

const SplashPage = () => {
  const artists = useSelector((state) => state.artist.allArtists);
  const [index, setIndex] = useState(0);
  const [artistName, setArtistName] = useState('Gorilla Lofi');
  const [artistLocation, setArtistLocation] = useState('North Carolina');
  const [artistBackgroundImg, setArtistBackgroundImg] = useState(
    'https://lofidelity-bucket.s3.amazonaws.com/pexels-photo-2270167.jpeg'
  );

  const [artistUrl, setArtistUrl] = useState('');

  const [showModal, setShowModal] = useState(false);
  //showModal handlers
  const openModal = () => {
    if (showModal) return; // do nothing if modal already showing
    setShowModal(true);
    //disable page scrolling:
    document.getElementById('root').classList.add('overflow');
  };

  const closeModal = () => {
    if (!showModal) return; // do nothing if modal already closed
    setShowModal(false);
    //enable page scrolling:
    document.getElementById('root').classList.remove('overflow');
  };

  // note: set Timeout won't start until eager loading is done
  useEffect(() => {
    const interval = setTimeout(() => {
      if (
        artists[index]?.bgImageUrl === 'null' ||
        artists[index]?.bgImageUrl === 'DEFAULT'
      ) {
        if (index < artists?.length - 1) {
          setIndex((index) => index + 1);
        } else {
          setIndex(0);
        }
      } else {
        setArtistName(artists[index]?.name);
        setArtistLocation(artists[index]?.location);
        setArtistBackgroundImg(artists[index]?.bgImageUrl);
        setArtistUrl(artists[index]?.artistUrl);
        if (index < artists?.length - 1) {
          setIndex((index) => index + 1);
        } else {
          setIndex(0);
        }
      }
    }, 5000);
    return () => clearTimeout(interval);
  }, [artists, index]);

  if (!artists) {
    return null;
  }

  return (
    <>
      <FullPageModal showModal={showModal} closeModal={closeModal}>
        <SignUpChoice />
      </FullPageModal>

      <div
        className='splash-page'
        style={{ backgroundImage: `url(${artistBackgroundImg})` }}
      >
        <div className='splash-hooks'>
          <h1>Listen your way.</h1>
          <p>
            Whether listening to relax, focus on work, or anywhere in between...
          </p>
          <p>Lofidelity is the hub for all things Lofi!</p>
        </div>
        <div className='splash-auth-buttons'>
          <button type='button' onClick={openModal} className='splash-btn'>
            {/* <Link to='/signup'>Sign up for free</Link> */}
            <div>Sign up for free </div>
          </button>
          {/* <button className='splash-btn'>
            <Link to='/login'>Already have an account? Log in</Link>
          </button> */}
        </div>
        <div className='artist-credentials'>
          {/* <Link to={`/${artistUrl}`} className='splash_artist_link'>
            {artistName}
          </Link> */}
          <div className='splash_artist_link'>{artistName}</div>
          <p>from {artistLocation}</p>
        </div>
      </div>
    </>
  );
};

export default SplashPage;
