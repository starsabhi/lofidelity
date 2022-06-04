import './ArtistDetail.css';

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import FullPageModal from '../FullPageModal';
import EditArtist from '../EditArtist';
import UploadPhoto from '../UploadPhoto';

export default function ArtistDetail({ artist }) {
  const sessionArtist = useSelector((state) => state.session.sessionArtist);
  const [showModal, setShowModal] = useState(false);
  //showModal handlers

  useEffect(()=> {
    console.log(artist)
  }, [artist])

  console.log("ARTIST: ", artist)
  const openModal = () => {
    if (showModal) return; // do nothing if modal already showing
    setShowModal(true); // else open modal
    document.getElementById('root').classList.add('overflow');
  };

  const closeModal = () => {
    if (!showModal) return; // do nothing if modal already closed
    setShowModal(false); // else close modal
    // disable page scrolling:
    document.getElementById('root').classList.remove('overflow');
  };

  // const handleMouseOver = () => {

  // }
  const genreList = {
    1: 'acoustic',
    2: 'alternative',
    3: 'ambient',
    4: 'blues',
    5: 'classical',
    6: 'country',
    7: 'electronic',
    8: 'experimental',
    9: 'folk',
    10: 'funk',
    11: 'hiphop_rap',
    12: 'jazz',
    13: 'metal',
    14: 'pop',
    15: 'punk',
    16: 'soul',
    17: 'reggae',
    18: 'rock',
  };
  return (
    <div className='artist-detail-container'>
      {/* <FullPageModal showModal={showModal} closeModal={closeModal}>
        <EditArtist
        // artistId={sessionArtist?.id}
        // albumId={albumId}
        // deleteRedirect={updateDeleted}
        />
      </FullPageModal> */}
      <FullPageModal showModal={showModal} closeModal={closeModal}>
        <UploadPhoto
          imageType={'profile'}
          artist={artist}
          // albumId={albumId}
          // deleteRedirect={updateDeleted}
        />
      </FullPageModal>
      <img
        className='artist-profile'
        alt='profile'
        src={artist?.profileImageUrl}
      />
      <div
        type='button'
        className={`edit-profile-image-button
              ${sessionArtist?.id === artist?.id ? '' : 'hidden'}
              `}
        onClick={() => {
          openModal();
          // setAlbumId(album.id);
        }}
      >
        <span className='material-symbols-outlined'>file_upload</span>{' '}
      </div>
      <span className='artist-name'>{artist?.name}</span>
      <span className='artist-genre'>{genreList[artist?.genreId]}</span>
      <span className='artist-location'>{artist?.location}</span>
      <p>{artist?.description}</p>
    </div>
  );
}
