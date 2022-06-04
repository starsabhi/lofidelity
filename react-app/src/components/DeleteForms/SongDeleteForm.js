import './DeleteForm.css';

import React, { useState } from 'react';
import * as songActions from '../../store/song';

import { useDispatch } from 'react-redux';

export default function DeleteSongForm({ albumId, songId, closeModal }) {
  const dispatch = useDispatch();

  const [deleteErrors, setDeleteErrors] = useState([]);

  //on submit dispatch deleteSongThunk
  const handleDeleteSubmit = async (e) => {
    e.preventDefault();
    setDeleteErrors([]); // reset error state

    // send request to backend API Song route (DELETE api/song/:songId)
    try {
      const resBody = await dispatch(
        songActions.deleteOneSongThunk(albumId, songId)
      );
      if (resBody.message === 'Success') {
        closeModal();
        return;
      }
    } catch (errorResponse) {
      const data = await errorResponse.json();
      if (data && data.errors) setDeleteErrors(data.errors);
    }
  };

  return (
    <div className='resource-delete-form-container'>
      {deleteErrors.length > 0 && (
        <div className='resource-error-container'>
          {deleteErrors.map((error, idx) => (
            <p className='resource-error-message' key={idx}>
              {error}
            </p>
          ))}
        </div>
      )}

      <form className='resource-delete-form' onSubmit={handleDeleteSubmit}>
        <div className='resource-delete-text1'>
          <span>{'Delete Song'}</span>
        </div>
        <div className='resource-delete-text2'>
          <span>{'Do you want to permanently delete this Song?'}</span>
        </div>

        <div className='resource-delete-form-btn-div'>
          <div className='resource-btn-container'>
            <button
              className='resource-cancel-btn'
              type='button'
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>

          <div className='resource-btn-container'>
            <button className='resource-delete-btn' type='submit'>
              Delete
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
