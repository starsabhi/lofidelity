import './ArtistDetail.css';

import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import FullPageModal from '../FullPageModal';
import EditArtistForm from '../EditArtistForm';
import UploadPhoto from '../UploadPhoto';
import AddAlbumForm from '../AddAlbumForm';

export default function ArtistDetail({ artist }) {
  const sessionArtist = useSelector((state) => state.session.sessionArtist);

  const [showEditProfileImageModal, setShowEditProfileImageModal] =
    useState(false);
  const [showEditCoverImageModal, setShowEditCoverImageModal] = useState(false);
  const [showEditBackgroundImageModal, setShowEditBackgroundImageModal] =
    useState(false);
  const [showEditArtistDetailsModal, setShowEditArtistDetailsModal] =
    useState(false);
  const [showAddAlbumModal, setShowAddAlbumModal] = useState(false);

  // useEffect(() => {
  // console.log('ARTIST: ', artist);
  // }, [artist]);

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

  const openAddAlbumModal = () => {
    if (showAddAlbumModal) return; // do nothing if modal already showing
    setShowAddAlbumModal(true); // else open modal
    document.getElementById('root').classList.add('overflow');
  };
  const closeAddAlbumModal = () => {
    if (!showAddAlbumModal) return; // do nothing if modal already closed
    setShowAddAlbumModal(false); // else close modal
    // disable page scrolling:
    document.getElementById('root').classList.remove('overflow');
  };

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
      {sessionArtist && sessionArtist?.id === artist?.id && (
        <div className={`artist-dashboard`}>
          <div>
            <span>Artist Dashboard</span>
          </div>
          <div
            type='button'
            className={`edit-artist-details-button`}
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
            className={`edit-profile-image-button`}
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
            className={`edit-cover-image-button`}
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
            className={`edit-background-image-button`}
            onClick={() => {
              openBackgroundModal();
              // setAlbumId(album.id);
            }}
          >
            <span className='material-symbols-outlined'>file_upload</span>
            <span> Edit background image </span>
          </div>
        </div>
      )}

      {/* <FullPageModal showEditProfileImageModal={showEditProfileImageModal} closeModal={closeModal}>
        <EditArtist
        // artistId={sessionArtist?.id}
        // albumId={albumId}
        // deleteRedirect={updateDeleted}
        />
      </FullPageModal> */}

      <FullPageModal
        showModal={showEditArtistDetailsModal}
        closeModal={closeArtistDetailsModal}
      >
        <EditArtistForm genreList={genreList} />
      </FullPageModal>

      <FullPageModal
        showModal={showAddAlbumModal}
        closeModal={closeAddAlbumModal}
      >
        <AddAlbumForm artist={artist} closeModal={closeAddAlbumModal} />
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

      {sessionArtist && sessionArtist?.id === artist?.id && (
        <button className='addalbumBtn' onClick={openAddAlbumModal}>
          Add album
        </button>
      )}
    </div>
  );
}
