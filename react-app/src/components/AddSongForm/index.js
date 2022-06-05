import './AddSongForm.css';

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as songActions from '../../store/song';

export default function AddSongForm({ songType, closeModal }) {
  const dispatch = useDispatch();

  const params = useParams();
  const albumId = params.id;

  const [song, setSong] = useState(false);
  const [title, setTitle] = useState('');
  const [songLoading, setSongLoading] = useState(false);
  const [uploadErrors, setUploadErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploadErrors([]);

    const formData = new FormData();

    formData.append('song', song);
    formData.append('albumId', albumId);
    formData.append('title', title);

    setSongLoading(true);

    try {
      const errors = await dispatch(songActions.addNewSongThunk(formData));
      if (!errors) {
        // setSongLoading(false);
        closeModal();

        // history.push('/');
        return;
      } else {
        setUploadErrors(errors);
      }
    } catch (errorResponse) {
      setSongLoading(false);
      // closeModal();
      setUploadErrors(['Something went wrong, please try again.']);
      console.log('error');
    }
  };

  const updateSong = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setSong(file);
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

          {/* <div className='add-song-form-group'>
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
          </div> */}

          <div className='resource-add-text1'>
            <span>{`Upload ${songType} song`}</span>
          </div>
          <div className='resource-add-text2'>
            <span>{`Upload your new ${songType} song`}</span>
          </div>
          <div className='resource-add-text2'>
            <input type='file' accept='audio/*' onChange={updateSong} />
          </div>

          <div className='resource-add-form-btn-div'>
            <div className='resource-btn-container'>
              <button
                className={`resource-btn`}
                type='button'
                disabled={songLoading}
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>

            <div className='resource-btn-container'>
              <button
                className={`resource-btn`}
                type='submit'
                disabled={songLoading}
              >
                Submit
              </button>
            </div>
          </div>

          {songLoading && <p>Uploading File please wait...</p>}
        </form>
      </div>
    </div>
  );
}
