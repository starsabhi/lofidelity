import './AlbumDetail.css';

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import playButton from '../../images/play-button.png';
import Player from '../Player';
import EditAlbumForm from '../EditAlbumForm';

import FullPageModal from '../FullPageModal';
import SongDeleteForm from '../DeleteForms/SongDeleteForm';
import EditSongForm from '../EditSongForm';

export default function AlbumDetail({ artist }) {
  const sessionArtist = useSelector((state) => state.session.sessionArtist);
  const sessionState = useSelector((state) => state);
  console.log(sessionState);
  // console.log(sessionArtist.id);

  const params = useParams();
  const albumId = params.id;

  const album = useSelector((state) => state.album[albumId]);
  const songs = useSelector((state) => state.album.songsByAlbumId[albumId]);

  const [url, setUrl] = useState(songs ? songs[0]?.audioUrl : '');

  const [trackNumber, setTrackNumber] = useState(null);

  const [songTitle, setSongTitle] = useState(songs ? songs[0]?.title : '');
  const [showDeleteSongModal, setShowDeleteSongModal] = useState(false);

  //showModal handlers - SONGS
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
  const [songId, setSongId] = useState(null);

  //showModal handlers - SONGS
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

      <div className='album-detail-container'>
        <div className='album-player-container'>
          <h1>{album?.title}</h1>
          <h3>by {artist?.name}</h3>
          <div>
            {sessionArtist?.id === album?.artistId ? (
              <button className='editAlbumDetails' onClick={openAlbumEditModal}>
                Edit Album Details
              </button>
            ) : (
              ''
            )}
          </div>
          <span>Now playing: {songTitle}</span>
          <Player albumId={albumId} url={url} />

          <div className='song-list-container'>
            {songs?.map((song) => (
              <div className='song-container' key={song?.id}>
                <img
                  className='song-play-btn'
                  id={`song-${song?.id}-play-btn`}
                  alt='play'
                  src={playButton}
                  onClick={() => {
                    setUrl(song?.audioUrl);
                    setSongTitle(song?.title);
                  }}
                />
                <span>
                  {song?.trackNumber}. {song?.title}
                </span>
                <div
                  type='button'
                  className={`song-delete-button
                  ${sessionArtist?.id === album?.artistId ? '' : 'hidden'}
                  `}
                  onClick={() => {
                    openDeleteSongModal();
                    setSongId(song.id);
                  }}
                >
                  <span className='material-symbols-outlined'> delete</span>
                </div>

                <div
                  type='button'
                  className={`song-edit-button
                  ${sessionArtist?.id === album?.artistId ? '' : 'hidden'}
                  `}
                  onClick={() => {
                    openEditSongModal();
                    setTrackNumber(song.trackNumber);
                    setSongId(song.id);
                  }}
                >
                  <span className='material-symbols-outlined'> edit</span>
                </div>
              </div>
            ))}
          </div>

          <div className='album-detail-image-div'>
            <img
              className='album-detail-image'
              id={`album-${album?.id}-image-detail`}
              alt='album cover'
              src={album?.imageUrl}
            />
          </div>
        </div>
      </div>
    </>
  );
}
