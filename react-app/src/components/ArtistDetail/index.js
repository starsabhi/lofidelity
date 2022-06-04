import './ArtistDetail.css';

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import FullPageModal from '../FullPageModal';
import EditArtistForm from '../EditArtistForm';
import UploadPhoto from '../UploadPhoto';

export default function ArtistDetail({ artist }) {
  const sessionArtist = useSelector((state) => state.session.sessionArtist);
  const [showEditProfileImageModal, setShowEditProfileImageModal] =
    useState(false);
  const [showEditCoverImageModal, setShowEditCoverImageModal] = useState(false);
  const [showEditBackgroundImageModal, setShowEditBackgroundImageModal] =
    useState(false);
  const [showEditArtistDetailsModal, setShowEditArtistDetailsModal] =
    useState(false);
  //showEditProfileImageModal handlers

  useEffect(() => {
    console.log(artist);
  }, [artist]);

  console.log('ARTIST: ', artist);
  const openProfileModal = () => {
    if (showEditProfileImageModal) return; // do nothing if modal already showing
    setShowEditProfileImageModal(true); // else open modal
    document.getElementById('root').classList.add('overflow');
  };

  const closeProfileModal = () => {
    if (!showEditProfileImageModal) return; // do nothing if modal already closed
    setShowEditProfileImageModal(false); // else close modal
    // disable page scrolling:
    document.getElementById('root').classList.remove('overflow');
  };
  const openCoverModal = () => {
    if (showEditCoverImageModal) return; // do nothing if modal already showing
    setShowEditCoverImageModal(true); // else open modal
    document.getElementById('root').classList.add('overflow');
  };

  const closeCoverModal = () => {
    if (!showEditCoverImageModal) return; // do nothing if modal already closed
    setShowEditCoverImageModal(false); // else close modal
    // disable page scrolling:
    document.getElementById('root').classList.remove('overflow');
  };
  const openBackgroundModal = () => {
    if (showEditBackgroundImageModal) return; // do nothing if modal already showing
    setShowEditBackgroundImageModal(true); // else open modal
    document.getElementById('root').classList.add('overflow');
  };

  const closeBackgroundModal = () => {
    if (!showEditBackgroundImageModal) return; // do nothing if modal already closed
    setShowEditBackgroundImageModal(false); // else close modal
    // disable page scrolling:
    document.getElementById('root').classList.remove('overflow');
  };
  const openArtistDetailsModal = () => {
    if (showEditArtistDetailsModal) return; // do nothing if modal already showing
    setShowEditArtistDetailsModal(true); // else open modal
    document.getElementById('root').classList.add('overflow');
  };

  const closeArtistDetailsModal = () => {
    if (!showEditArtistDetailsModal) return; // do nothing if modal already closed
    setShowEditArtistDetailsModal(false); // else close modal
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
      <div
        className={`artist-dashboard
              ${sessionArtist?.id === artist?.id ? '' : 'hidden'}
              `}
      >
        <div>
          <span>Artist Dashboard</span>
        </div>
        <div
          type='button'
          className={`edit-artist-details-button
              ${sessionArtist?.id === artist?.id ? '' : 'hidden'}
              `}
          onClick={() => {
            openArtistDetailsModal();
            // setAlbumId(album.id);
          }}
        >
          <span className='material-symbols-outlined'>file_upload</span>
          <span> Edit {artist?.name} Details </span>
        </div>
        <div
          type='button'
          className={`edit-profile-image-button
              ${sessionArtist?.id === artist?.id ? '' : 'hidden'}
              `}
          onClick={() => {
            openProfileModal();
            // setAlbumId(album.id);
          }}
        >
          <span className='material-symbols-outlined'>file_upload</span>
          <span> Edit profile image </span>
        </div>
        <div
          type='button'
          className={`edit-cover-image-button
              ${sessionArtist?.id === artist?.id ? '' : 'hidden'}
              `}
          onClick={() => {
            openCoverModal();
            // setAlbumId(album.id);
          }}
        >
          <span className='material-symbols-outlined'>file_upload</span>
          <span> Edit cover image </span>
        </div>
        <div
          type='button'
          className={`edit-background-image-button
              ${sessionArtist?.id === artist?.id ? '' : 'hidden'}
              `}
          onClick={() => {
            openBackgroundModal();
            // setAlbumId(album.id);
          }}
        >
          <span className='material-symbols-outlined'>file_upload</span>
          <span> Edit background image </span>
        </div>
      </div>
      {/* <FullPageModal showEditProfileImageModal={showEditProfileImageModal} closeModal={closeModal}>
        <EditArtist
        // artistId={sessionArtist?.id}
        // albumId={albumId}
        // deleteRedirect={updateDeleted}
        />
      </FullPageModal> */}
      <FullPageModal showModal={showEditArtistDetailsModal} closeModal={closeArtistDetailsModal}>
        <EditArtistForm genreList={genreList}/>
      </FullPageModal>
      <FullPageModal
        showModal={showEditCoverImageModal}
        closeModal={closeCoverModal}
      >
        <UploadPhoto
          imageType={'cover'}
          artist={artist}
          // albumId={albumId}
          // deleteRedirect={updateDeleted}
        />
      </FullPageModal>
      <FullPageModal
        showModal={showEditBackgroundImageModal}
        closeModal={closeBackgroundModal}
      >
        <UploadPhoto
          imageType={'background'}
          artist={artist}
          // albumId={albumId}
          // deleteRedirect={updateDeleted}
        />
      </FullPageModal>
      <FullPageModal
        showModal={showEditProfileImageModal}
        closeModal={closeProfileModal}
      >
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

      <span className='artist-name'>{artist?.name}</span>
      <span className='artist-genre'>{genreList[artist?.genreId]}</span>
      <span className='artist-location'>{artist?.location}</span>
      <p>{artist?.description}</p>
    </div>
  );
}
