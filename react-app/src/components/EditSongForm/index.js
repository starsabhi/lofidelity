import './EditSong.css'

import React, { useState } from 'react';
import * as songActions from '../../store/song'

import { useDispatch, useSelector } from 'react-redux';

export default function EditSongForm({ albumId, songId, trackNumber, closeEditModal }) {
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

    console.log("FORM DATA", formData)
    console.log('SONG ID', songId)

    try {
      const resBody = await dispatch(
        songActions.updateOneSongThunk(songId, formData)
      );
      console.log('RESBODY', resBody)
      if (resBody) {
        closeEditModal();
        return;
      }
    } catch (errorResponse) {
      console.log('ERROR RESPONSE', errorResponse)
      const data = await errorResponse.json();
      if (data && data.errors) setEditErrors(data.errors);
    }
  };

  return (
    <div className='resource-edit-form-container'>
      <div className='resource-edit-card'>
        <h2 className='resource-edit-header'>Edit Song</h2>

        {editErrors.length > 0 && (
          <div className='resource-edit-error-container'>
            {editErrors.map((error, idx) => (
              <div key={idx}>{error.split(': ')[1]}</div>
            ))}
          </div>
        )}

        <form
          className={'resource-edit-form-control'}
          autoComplete='off'
          onSubmit={handleEditSubmit}
        >
          <div className='resource-edit-form-group'>
              <label className='resource-edit-label' htmlFor='songTitle'>
                <div>Song Title</div>
              </label>
              <input 
                id='songTitle'
                className='resource-edit-input'
                type='text'
                name='songTitle'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
          </div>

          <div className='resource-edit-btn-container'>
              <button className='resource-edit-submit-btn' type='submit'>
                Submit
              </button>
          </div>
        </form>
      </div>
    </div>
  );
};