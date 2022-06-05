import './AlbumDetail.css';

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import playButton from '../../images/play-button.svg';
import pauseButton from '../../images/pause-button.svg';
import Player from '../Player';
import EditAlbumForm from '../EditAlbumForm';

import FullPageModal from '../FullPageModal';
import SongDeleteForm from '../DeleteForms/SongDeleteForm';
import EditSongForm from '../EditSongForm';
import AddSongForm from '../AddSongForm';
import UploadAlbumPhoto from '../UploadAlbumPhoto';

export default function AlbumDetail({ artist }) {
  const sessionArtist = useSelector((state) => state.session.sessionArtist);

  const params = useParams();
  const albumId = params.id;

  const album = useSelector((state) => state.album[albumId]);
  const songs = useSelector((state) => state.album.songsByAlbumId[albumId]);

  // slices of state
  const [url, setUrl] = useState(songs ? songs[0]?.audioUrl : '');
  const [trackNumber, setTrackNumber] = useState(null);
  const [songTitle, setSongTitle] = useState(songs ? songs[0]?.title : '');
  const [currentTrack, setCurrentTrack] = useState(1);
  const [autoPlay, setAutoPlay] = useState(false);
  const [songId, setSongId] = useState(null);

  useEffect(() => {
    if (songs) {
      setSongTitle(songs[currentTrack - 1]?.title);
      setUrl(songs[0]?.audioUrl);
    }
  }, [songs, currentTrack]);

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

  const [showEditAlbumImageModal, setShowEditAlbumImageModal] = useState(false);
  const openAlbumImageModal = () => {
    if (showEditAlbumImageModal) return; // do nothing if modal already showing
    setShowEditAlbumImageModal(true); // else open modal
    document.getElementById('root').classList.add('overflow');
  };
  const closeAlbumImageModal = () => {
    if (!showEditAlbumImageModal) return; // do nothing if modal already closed
    setShowEditAlbumImageModal(false); // else close modal
    // disable page scrolling:
    document.getElementById('root').classList.remove('overflow');
  };

  const [showDeleteSongModal, setShowDeleteSongModal] = useState(false);
  const openDeleteSongModal = () => {
    if (showDeleteSongModal) return; // do nothing if modal already showing
    setShowDeleteSongModal(true); // else open modal
    // disable page scrolling:
    document.getElementById('root').classList.add('overflow');
  };
  const closeDeleteSongModal = () => {
    if (!showDeleteSongModal) return; // do nothing if modal already closed
    setShowDeleteSongModal(false); // else close modal
    // enable page scrolling:
    document.getElementById('root').classList.remove('overflow');
  };

  const [showEditSongModal, setShowEditSongModal] = useState(false);
  const openEditSongModal = () => {
    if (showEditSongModal) return; // do nothing if modal already showing
    setShowEditSongModal(true); // else open modal
    document.getElementById('root').classList.add('overflow');
  };
  const closeEditSongModal = () => {
    if (!showEditSongModal) return; // do nothing if modal already closed
    setShowEditSongModal(false); // else close modal
    // disable page scrolling:
    document.getElementById('root').classList.remove('overflow');
  };

  const [showAddSongModal, setShowAddSongModal] = useState(false);
  const openAddSongModal = () => {
    if (showAddSongModal) return; // do nothing if modal already showing
    setShowAddSongModal(true); // else open modal
    document.getElementById('root').classList.add('overflow');
  };
  const closeAddSongModal = () => {
    if (!showAddSongModal) return; // do nothing if modal already closed
    setShowAddSongModal(false); // else close modal
    // disable page scrolling:
    document.getElementById('root').classList.remove('overflow');
  };

  const [showAlbumEditModal, setShowAlbumEditModal] = useState(false);
  const openAlbumEditModal = () => {
    if (showAlbumEditModal) return; // do nothing if modal already showing
    setShowAlbumEditModal(true); // else open modal
    document.getElementById('root').classList.add('overflow');
  };
  const closeAlbumEditModal = () => {
    if (!showAlbumEditModal) return; // do nothing if modal already closed
    setShowAlbumEditModal(false); // else close modal
    // disable page scrolling:
    document.getElementById('root').classList.remove('overflow');
  };

  return (
    <>
      <FullPageModal
        showModal={showAlbumEditModal}
        closeModal={closeAlbumEditModal}
      >
        <EditAlbumForm artistId={sessionArtist?.id} albumId={albumId} />
      </FullPageModal>

      <FullPageModal
        showModal={showDeleteSongModal}
        closeModal={closeDeleteSongModal}
      >
        <SongDeleteForm albumId={album?.id} songId={songId} />
      </FullPageModal>

      <FullPageModal
        showModal={showEditSongModal}
        closeModal={closeEditSongModal}
      >
        <EditSongForm
          albumId={album?.id}
          songId={songId}
          trackNumber={trackNumber}
        />
      </FullPageModal>
      <FullPageModal
        showModal={showEditAlbumImageModal}
        closeModal={closeAlbumImageModal}
      >
        <UploadAlbumPhoto
          // imageType={'cover'}
          artistId={artist?.id}
          albumId={albumId}
          // deleteRedirect={updateDeleted}
        />
      </FullPageModal>

      <FullPageModal
        showModal={showAddSongModal}
        closeModal={closeAddSongModal}
      >
        <AddSongForm songType={genreList[sessionArtist?.genreId]} />
      </FullPageModal>

      <div className='album-detail-container-inner'>
        <div className='album-player-container'>
          <h1>{album?.title}</h1>
          <h3>by {artist?.name}</h3>

          {sessionArtist && sessionArtist?.id === album?.artistId && (
            <div>
              <button className='editAlbumDetails' onClick={openAlbumEditModal}>
                Edit Album Details
              </button>
            </div>
          )}

          {url && (
            <>
              <span>Now playing: {songTitle}</span>
              <Player albumId={albumId} url={url} playing={autoPlay} />

              <div className='song-list-container'>
                {songs?.map((song) => (
                  <div className='song-container' key={song?.id}>
                    <img
                      className='song-play-btn'
                      id={`song-${song?.id}-play-btn`}
                      alt='play'
                      src={
                        autoPlay && currentTrack === song?.trackNumber
                          ? pauseButton
                          : playButton
                      }
                      onClick={() => {
                        setUrl(song?.audioUrl);
                        setSongTitle(song?.title);
                        if (currentTrack === song?.trackNumber) {
                          setAutoPlay(!autoPlay);
                        } else {
                          setAutoPlay(true);
                        }
                        setCurrentTrack(song?.trackNumber);
                      }}
                    />
                    <span>
                      {song?.trackNumber}. {song?.title}
                    </span>

                    {sessionArtist && sessionArtist?.id === album?.artistId && (
                      <>
                        <div
                          type='button'
                          className={`song-delete-button`}
                          onClick={() => {
                            openDeleteSongModal();
                            setSongId(song.id);
                          }}
                        >
                          <span className='material-symbols-outlined'>
                            delete
                          </span>
                        </div>

                        <div
                          type='button'
                          className={`song-edit-button`}
                          onClick={() => {
                            openEditSongModal();
                            setTrackNumber(song.trackNumber);
                            setSongId(song.id);
                          }}
                        >
                          <span className='material-symbols-outlined'>
                            edit
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {sessionArtist && sessionArtist?.id === album?.artistId && (
            <div
              type='button'
              className={`song-add-button`}
              onClick={openAddSongModal}
            >
              <span className='material-symbols-outlined'> add</span>
            </div>
          )}
        </div>
        <div className='album-detail-image-div'>
          <img
            className='album-detail-image'
            id={`album-${album?.id}-image-detail`}
            alt='album cover'
            src={album?.imageUrl}
          />

          {sessionArtist && sessionArtist?.id === album?.artistId && (
            <div
              type='button'
              className={`edit-profile-image-button`}
              onClick={() => {
                openAlbumImageModal();
                // setAlbumId(album.id);
              }}
            >
              <span className='material-symbols-outlined'>file_upload</span>
              <span> Edit album image </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
