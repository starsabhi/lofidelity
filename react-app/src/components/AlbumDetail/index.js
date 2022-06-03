import './AlbumDetail.css';

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import playButton from '../../images/play-button.png';
import Player from '../Player';

export default function AlbumDetail({ artist }) {
  const params = useParams();
  const albumId = params.id;

  const album = useSelector((state) => state.album[albumId]);
  const songs = useSelector((state) => state.album.songsByAlbumId[albumId]);

  const [url, setUrl] = useState(songs ? songs[0]?.audioUrl : '');
  const [songTitle, setSongTitle] = useState(songs ? songs[0]?.title : '')

  return (
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
  );
}
