import './EditSong.css'

import React, { useState } from 'react';
import * as songActions from '../../store/song'

import { useDispatch, useSelector } from 'react-redux';

export default function EditSongForm({ songId, closeEditModal }) {
  const dispatch = useDispatch();

  const [editErrors, setEditErrors] = useState([]);

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setEditErrors([]);

    const formData = {
      
    }

    try {
      const resBody = await dispatch(
        songActions.updateOneSongThunk(songId, formData)
      );
      if (resBody) {
        closeEditModal();
        return;
      }
    } catch (errorResponse) {
      const data = await errorResponse.json();
      if (data && data.errors) setEditErrors(data.errors);
    }
  };

  return (
    <div className='resource-edit-form-container'>This is the song edit form</div>
  )
}