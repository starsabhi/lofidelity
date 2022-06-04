import './EditSong.css';

import React, { useState } from 'react';
import * as songActions from '../../store/song';

import { useDispatch, useSelector } from 'react-redux';

export default function EditSongForm({ songId, closeEditModal }) {
  const dispatch = useDispatch();

  const [editErrors, setEditErrors] = useState([]);

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setEditErrors([]);

    const formData = {};

    try {
      const errors = await dispatch(
        songActions.updateOneSongThunk(songId, formData)
      );

      if (!errors) {
        closeEditModal();
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
      This is the song edit form
    </div>
  );
}
