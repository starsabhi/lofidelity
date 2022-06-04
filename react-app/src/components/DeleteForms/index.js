import './DeleteForm.css';

import React, { useState } from 'react';
import * as albumActions from '../../store/album';

import { useDispatch } from 'react-redux';

export default function DeleteImageForm({ artistId, albumId, closeModal }) {
  const dispatch = useDispatch();

  const [deleteErrors, setDeleteErrors] = useState([]);

  //on submit dispatch deletePhotoThunk
  const handleDeleteSubmit = async (e) => {
    e.preventDefault();
    setDeleteErrors([]); //reset error state

    // send request to backend API Album route (DELETE api/image/:imageId)
    try {
      const resBody = await dispatch(
        albumActions.deleteOneAlbumThunk(artistId, albumId)
      );
      if (resBody.message === 'Success') {
        closeModal();
        return;
      }
      // if (response.ok) {
      // The clone() method of the Response interface creates a clone of a response object, identical in every way, but stored in a different variable.
      // Once a  response has been consumed by .json() you can't read it a second time. So return resBody in thunk instead.
      // }
    } catch (errorResponse) {
      const data = await errorResponse.json();
      if (data && data.errors) setDeleteErrors(data.errors);
    }
  };

  return (
    <div className={`resource-delete-form-container`}>
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
          <span>{`Delete Album`}</span>
        </div>
        <div className='resource-delete-text2'>
          <span>{`Do you want to permanently delete this Album?`}</span>
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
