import './EditSong.css';

import React, { useState } from 'react';
import * as songActions from '../../store/song';

import { useDispatch } from 'react-redux';

export default function EditSongForm({ albumId, songId, trackNumber, closeModal }) {
  const dispatch = useDispatch();

  const [editErrors, setEditErrors] = useState([]);
  const [title, setTitle] = useState('');

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setEditErrors([]);


    const formData = {
      albumId: albumId,
      title: title,
      trackNumber: trackNumber
    }

    try {
      const errors = await dispatch(
        songActions.updateOneSongThunk(songId, formData)
      );
      if (!errors) {
        closeModal();
        return;
      } else {
        setEditErrors(errors);
        return;
      }
    } catch (errorResponse) {
      // const data = await errorResponse.json();
      console.log('Failed Request: ', errorResponse);
    }
  };

  return (
    <div className='resource-edit-form-container'>
      <div className='edit-song-card'>
        <h2 className='edit-song-header'>Edit Song</h2>
        {editErrors.length > 0 && (
          <div className='resource-error-container'>
            {editErrors.map((error, idx) => (
              <div className='resource-error-message' key={idx}>
                {error.split(': ')[1]}
              </div>
            ))}
          </div>
        )}

        <form
          className={'resource-edit-form'}
          autoComplete='off'
          onSubmit={handleEditSubmit}
        >
          <div className='edit-song-form-group'>
            <label className='edit-song-label' htmlFor='songTitle'>
              <div>Song Title </div>
            </label>
            <input 
              id='songTitle'
              className='edit-song-input'
              type='text'
              name='songTitle'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className='resource-btn-container'>
            <button className='resource-btn' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
