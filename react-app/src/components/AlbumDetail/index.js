import './AlbumDetail.css';

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import playButton from '../../images/play-button.png';
import Player from '../Player';

import FullPageModal from '../FullPageModal';
import SongDeleteForm from '../DeleteForms/SongDeleteForm'

export default function AlbumDetail({ artist }) {
  const params = useParams();
  const albumId = params.id;

  const sessionArtist = useSelector((state) => state.session.sessionArtist);
  const album = useSelector((state) => state.album[albumId]);
  const songs = useSelector((state) => state.album.songsByAlbumId[albumId]);

  const [url, setUrl] = useState(songs ? songs[0]?.audioUrl : '');
  const [songTitle, setSongTitle] = useState(songs ? songs[0]?.title : '')
  const [showModal, setShowModal] = useState(false);
  const [songId, setSongId] = useState(null)

  //showModal handlers
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

      <FullPageModal showModal={showModal} closeModal={closeModal}>
        <SongDeleteForm 
          albumId={album?.id}
          songId={songId}
        />
      </FullPageModal>

      <div className='album-detail-container'>
        <div className='album-player-container'>
          <h1>{album?.title}</h1>
          <h3>by {artist?.name}</h3>
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
                    setUrl(song?.audioUrl)
                    setSongTitle(song?.title)
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
                    openModal();
                    setSongId(song.id)
                  }}
                  >
                    <span className='material-symbols-outlined'> delete</span>
                </div>
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
