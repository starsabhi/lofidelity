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
  const [showArtistDashboard, setShowArtistDashboard] = useState(false);

  const toggleArtistDashboard = () => {
    setShowArtistDashboard((showArtistDashboard) => !showArtistDashboard);
  };

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
    1: 'Acoustic',
    2: 'Alternative',
    3: 'Ambient',
    4: 'Blues',
    5: 'Classical',
    6: 'Country',
    7: 'Electronic',
    8: 'Experimental',
    9: 'Folk',
    10: 'Funk',
    11: 'Hip-hop/Rap',
    12: 'Jazz',
    13: 'Metal',
    14: 'Pop',
    15: 'Punk',
    16: 'Soul',
    17: 'Reggae',
    18: 'Rock',
  };

  return (
    <>
      {/* <div className='artist-edit-container'>
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
      </div> */}

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

      <div className='artist-bio-container'>
        <img
          className='artist-profile'
          alt='profile'
          src={artist?.profileImageUrl}
        />

        <span className='artist-name'>{artist?.name}</span>
        <span className='artist-genre'>{genreList[artist?.genreId]}</span>
        <span className='artist-location'>{artist?.location}</span>
        <p className='artist-description'>{artist?.description}</p>

        {sessionArtist && sessionArtist?.id === artist?.id && (
          <div
            className='addalbumBtn add-albumBtnover'
            onClick={openAddAlbumModal}
          >
            <div>
              <span class='material-symbols-outlined'>playlist_add</span>
            </div>
            Add Album
          </div>
        )}
      </div>

      <div className='artist-edit-container'>
        {sessionArtist && sessionArtist?.id === artist?.id && (
          <div className={`artist-dashboard`}>
            <div>
              <span
                className='artist-dashboard-header'
                onClick={toggleArtistDashboard}
              >
                Artist Dashboard
              </span>
            </div>
            {showArtistDashboard ? (
              <>
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
              </>
            ) : null}
          </div>
        )}
      </div>
    </>
  );
}
