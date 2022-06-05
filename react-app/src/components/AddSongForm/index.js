import './AddSongForm.css';

import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as songActions from '../../store/song';


export default function AddSongForm({ songType, closeModal }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentArtist = useSelector((state) => state.session.sessionArtist)

  const params = useParams();
  const albumId = params.id;

  const [song, setSong] = useState(false);
  const [title, setTitle] = useState('');
  const [trackNumber, setTrackNumber] = useState(null);
  const [songLoading, setSongLoading] = useState(false);
  const [uploadErrors, setUploadErrors] = useState([]);

  const id = currentArtist?.id;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploadErrors([]);

    const formData = new FormData();

    formData.append('song', song);
    formData.append('albumId', albumId);
    formData.append('title', title);
    formData.append('trackNumber', trackNumber);
    console.log(id);

    setSongLoading(true);
    console.log('right before thunk');

    try {
      const res = await dispatch(
        songActions.addNewSongThunk(formData)
      )
      console.log(res);
      if (res.url) {
        setSongLoading(false);
        closeModal();

        history.push('/');
        return;
      }
    } catch (errorResponse) {
      setSongLoading(false);
      console.log('error');
    }
  };

  const updateSong = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setSong(file)
  };

  return (
    <div className='resource-add-form-container'>
      <div className='add-song-card'>
        <h2 className='add-song-header'>Add Song</h2>
        {uploadErrors.length > 0 && (
          <div className='resource-error-container'>
            {uploadErrors.map((error, idx) => (
              <p className='resource-error-message' key={idx}>
                {error}
              </p>
            ))}
          </div>
        )}

        <form className='resource-add-form' onSubmit={handleSubmit}>
          <div className='add-song-form-group'>
            <label className='add-song-label' htmlFor='title'>
              <div>Title </div>
            </label>
            <input
              id='title'
              className='add-song-input'
              type='title'
              name='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className='add-song-form-group'>
            <label className='add-song-label' htmlFor='trackNumber'>
              <div>Track Number </div>
            </label>
            <input
              id='trackNumber'
              className='add-song-input'
              type='trackNumber'
              name='trackNumber'
              value={trackNumber}
              onChange={(e) => setTrackNumber(e.target.value)}
              required
            />
          </div>

          
          <div className='resource-add-text1'>
            <span>{`Upload ${songType} song`}</span>
          </div>
          <div className='resource-add-text2'>
            <span>{`Upload your new ${songType} song`}</span>
          </div>
          <div className='resource-add-text2'>
            <input type='file' accept='song/*' onChange={updateSong} />
          </div>

          <div className='resource-add-form-btn-div'>
            <div className='resource-btn-container'>
              <button
                className='resource-btn'
                type='button'
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>

            <div className='resource-btn-container'>
              <button className='resource-btn' type='submit'>
                Submit
              </button>
            </div>
          </div>

          {songLoading && <p>Loading...</p>}
        </form>
      </div>
    </div>
  );
};