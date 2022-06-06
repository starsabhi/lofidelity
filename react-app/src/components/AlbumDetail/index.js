import './AlbumDetail.css';

import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import playButton from '../../images/play-button.svg';
import pauseButton from '../../images/pause-button.svg';
// import Player from '../Player';
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
  const [editTitle, setEditTitle] = useState('');
  const [songTitle, setSongTitle] = useState(songs ? songs[0]?.title : '');
  const [currentTrack, setCurrentTrack] = useState(1);
  const [songId, setSongId] = useState(null);

  //slices of state related to player functionality
  const [autoPlay, setAutoPlay] = useState(false);
  const [trackButton, setTrackButton] = useState(playButton);
  // const [deleted, setDeleted] = useState(false);
  // const [isPlaying, setIsPlaying] = useState(false);

  const updateStateOnDelete = () => {
    // setDeleted(true);
    setCurrentTrack(1);
    setAutoPlay(false);
    setTrackButton(playButton);
  };

  const updatePlayButton = () => {
    setTrackButton(pauseButton);
    // setIsPlaying(true);
    setAutoPlay(true);
  };

  const updatePauseButton = () => {
    setTrackButton(playButton);
    // setIsPlaying(false);
    setAutoPlay(false);
  };

  //updates song title and url
  useEffect(() => {
    if (songs) {
      setSongTitle(songs[currentTrack - 1]?.title);
      setUrl(songs[currentTrack - 1]?.audioUrl);
    }
  }, [songs, currentTrack, songTitle]);

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
          <SongDeleteForm
            albumId={album?.id}
            songId={songId}
            updateStateOnDelete={updateStateOnDelete}
          />
        </FullPageModal>

        <FullPageModal
          showModal={showEditSongModal}
          closeModal={closeEditSongModal}
        >
          <EditSongForm
            albumId={album?.id}
            songId={songId}
            trackNumber={trackNumber}
            songTitle={editTitle}
          />
        </FullPageModal>
        <FullPageModal
          showModal={showEditAlbumImageModal}
          closeModal={closeAlbumImageModal}
        >
          <UploadAlbumPhoto artistId={artist?.id} albumId={albumId} />
        </FullPageModal>

        <FullPageModal
          showModal={showAddSongModal}
          closeModal={closeAddSongModal}
        >
          <AddSongForm songType={genreList[sessionArtist?.genreId]} />
        </FullPageModal>
      </>

      <div className='album-detail-container-inner'>
        <div className='album-player-container'>
          <div className='album-title-text'>{album?.title} </div>

          <div className='album-by-link'>
            <span>by &nbsp;</span>
            <span className='artist-name-span'>
              <Link to={`/${artist?.artistUrl}`}>{artist?.name}</Link>
            </span>
          </div>

          {url && (
            <>
              <div className='album-now-playing'>
                <div className='album-song-now-text'>Now Playing:</div>
                <div className='album-song-title'> {songTitle}</div>
              </div>

              {/* <Player url={url} autoPlay={autoPlay} updatePlayButton={updatePlayButton} updatePauseButton={updatePauseButton} /> */}
              <ReactPlayer
                url={url}
                // width='376px'
                width='300px'
                // height='50px'
                height='40px'
                volume={0.3}
                playing={autoPlay}
                onPlay={updatePlayButton}
                controls
                onPause={updatePauseButton}
              />

              <div className='song-list-container'>
                {songs?.map((song) => (
                  <div className='song-container' key={song?.id}>
                    <div className='song-play-title-container'>
                      <div
                        className='song-play-btn-container'
                        onClick={() => {
                          setUrl(song?.audioUrl);
                          setSongTitle(song?.title);

                          // match image of playing track on player to button next to track
                          if (currentTrack === song?.trackNumber) {
                            setAutoPlay((autoPlay) => !autoPlay);
                          } else setAutoPlay(true);

                          setCurrentTrack(song?.trackNumber);
                        }}
                      >
                        <img
                          className='song-play-btn'
                          id={`song-${song?.id}-play-btn`}
                          alt='play'
                          src={
                            currentTrack === song?.trackNumber
                              ? trackButton
                              : playButton
                          }
                        />
                      </div>
                      <div className='song-track-title-text'>
                        {song?.trackNumber}. {song?.title}
                      </div>
                    </div>

                    {sessionArtist && sessionArtist?.id === album?.artistId && (
                      <div className={`song-edit-delete-container`}>
                        <div
                          className={`song-delete-button`}
                          onClick={() => {
                            openDeleteSongModal();
                            setSongId(song?.id);
                            if (currentTrack === song?.trackNumber) {
                              setAutoPlay(false);
                            }
                          }}
                        >
                          <span className='material-symbols-outlined'>
                            delete
                          </span>
                        </div>

                        <div
                          className={`song-edit-button`}
                          onClick={() => {
                            openEditSongModal();
                            setTrackNumber(song?.trackNumber);
                            setSongId(song?.id);
                            setEditTitle(song?.title);
                          }}
                        >
                          <span className='material-symbols-outlined'>
                            edit
                          </span>
                        </div>
                      </div>
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
              <div className='material-symbols-outlined'> add</div>
              <div> Add Track</div>
            </div>
          )}
        </div>

        <div className='album-detail-image-container'>
          <img
            className='album-detail-image'
            id={`album-${album?.id}-image-detail`}
            alt='album cover'
            src={album?.imageUrl}
          />

          <div className='album-about-container'>
            <div className='album-year-text-container'>
              <span className='album-year-text'>Released&nbsp;</span>
              {album?.releaseYear}
            </div>
            <div className='album-description-container'>
              <div className='album-description-text'>About:</div>
            </div>

            <div className='album-about-text'>{album?.about}</div>
          </div>

          {sessionArtist && sessionArtist?.id === album?.artistId && (
            <div className='edit-album-button-container'>
              <div
                className='edit-album-image-button'
                onClick={openAlbumImageModal}
              >
                <span className='material-symbols-outlined'>file_upload</span>
                <span className='edit-profile-image-span'>
                  &nbsp;Edit Album Image
                </span>
              </div>

              <div
                className='edit-album-details-button'
                onClick={openAlbumEditModal}
              >
                <span className='material-symbols-outlined'>edit_note</span>
                <span className='edit-profile-image-span'>
                  &nbsp;Edit Album Details
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
