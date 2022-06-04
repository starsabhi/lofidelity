import './AlbumDetail.css';

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FullPageModal from '../FullPageModal';
import playButton from '../../images/play-button.png';
import Player from '../Player';
import EditAlbumForm from './EditAlbumModal';

export default function AlbumDetail({ artist }) {
  const sessionArtist = useSelector((state) => state.session.sessionArtist);
  console.log(sessionArtist.id);
  const params = useParams();
  const albumId = params.id;

  const album = useSelector((state) => state.album[albumId]);
  const songs = useSelector((state) => state.album.songsByAlbumId[albumId]);

  const [url, setUrl] = useState(songs ? songs[0]?.audioUrl : '');
  const [songTitle, setSongTitle] = useState(songs ? songs[0]?.title : '');
  const [showModal, setShowModal] = useState(false);

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

  return (
    <>
      <>
        <FullPageModal showModal={showModal} closeModal={closeModal}>
          <EditAlbumForm
            artistId={sessionArtist?.id}
            albumId={albumId}
            // deleteRedirect={updateDeleted}
          />
        </FullPageModal>
      </>
      <div className='album-detail-container'>
        <div className='album-player-container'>
          <h1>{album?.title}</h1>
          <h3>by {artist?.name}</h3>
          <button
            onClick={() => {
              openModal();
            }}
          >
            Edit Album Details
          </button>
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
              </div>
            ))}
          </div>
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
    </>
  );
}
