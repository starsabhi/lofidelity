import React, { useState } from 'react';
import * as albumActions from '../../store/album';
import { useDispatch, useSelector } from 'react-redux';
import './EditAlbumForm.css';

export default function EditAlbumForm({ artistId, albumId, closeModal }) {
  const dispatch = useDispatch('');
  const session = useSelector((state) => state);
  // console.log(session.album[albumId]);
  let currentAlbum = session.album[albumId];
  const [title, setTitle] = useState(`${currentAlbum.title}`);
  const [releaseYear, setReleaseYear] = useState(`${currentAlbum.releaseYear}`);
  const [about, setAbout] = useState(`${currentAlbum.about}`);
  const [price, setPrice] = useState(`${currentAlbum.price}`);
  const [editErrors, setEditErrors] = useState([]);

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setEditErrors([]);

    let formdata = {
      artistId: artistId,
      title: title,
      releaseYear: releaseYear,
      about: about,
      price: price,
    };

    try {
      const errors = await dispatch(
        albumActions.updateOneAlbumThunk(albumId, formdata)
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
    <form className='resource-delete-form' onSubmit={handleEditSubmit}>
      <div className={`resource-delete-form-container`}>
        {editErrors.length > 0 && (
          <div className='resource-error-container'>
            {editErrors.map((error, idx) => (
              <p className='resource-error-message' key={idx}>
                {error}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className='resource-delete-text1'>
        <span>{`Edit Album Details`}</span>
      </div>

      <label>Title</label>
      <input
        className='allInputforCreateB'
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        // placeholder='Title'
        name='name'
      ></input>
      <label>ReleaseYear</label>
      <input
        className='allInputforCreateB'
        type='text'
        onChange={(e) => setReleaseYear(e.target.value)}
        value={releaseYear}
        // placeholder='Title'
        name='name'
      ></input>
      <label>About</label>
      <input
        className='allInputforCreateB'
        type='text'
        onChange={(e) => setAbout(e.target.value)}
        value={about}
        // placeholder='Title'
        name='name'
      ></input>
      <label>Price</label>
      <input
        className='allInputforCreateB'
        type='text'
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        // placeholder='Title'
        name='name'
      ></input>

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
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
