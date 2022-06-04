import React, { useState, useEffect } from 'react';

import * as artistActions from '../../store/artist';
import * as sessionActions from '../../store/session'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './EditArtistForm.css';

export default function EditArtistForm({ genreList, closeModal }) {
  const dispatch = useDispatch('');
  const history = useHistory()
  // const session = useSelector((state) => state);
  // // console.log(session.album[albumId]);
  // let currentAlbum = session.album[albumId];
  const artist = useSelector((state)=> state.session.sessionArtist)
  const [genreId, setGenreId] = useState(`${genreList[artist?.genreId]}`);
  const [name, setName] = useState(`${artist?.name}`);
  const [location, setLocation] = useState(`${artist?.location}`);
  const [artistUrl, setArtistUrl] = useState(`${artist?.artistUrl}`);
  const [description, setDescription] = useState(`${artist?.description}`);
  const [editErrors, setEditErrors] = useState([]);
  const genreArr = Object.entries(genreList);

  useEffect(() => {
    console.log(artist);
  }, [artist]);

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setEditErrors([]);

    let formdata = {
      genreId: genreId,
      name: name,
      location: location,
      artistUrl: artistUrl,
      description: description,
      userId: artist?.userId
    };

    const errors = await dispatch(
      artistActions.updateOneArtistThunk(artist, formdata)
    );
    console.log('MODAL', errors);
    if (!errors) {
      closeModal();
      history.push(`/${artistUrl}`);
      return;
    } else {
      setEditErrors(errors);
      return;
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
        <span>{`Edit Artist Details`}</span>
      </div>

      <label for='name'>Artist Name</label>
      <input
        className='edit-artist-input'
        type='text'
        onChange={(e) => setName(e.target.value)}
        value={name}
        // placeholder='Title'
        name='name'
      ></input>
      <label for='artist-url'>Artist URL</label>
      <input
        className='edit-artist-input'
        type='text'
        onChange={(e) => setArtistUrl(e.target.value)}
        value={artistUrl}
        // placeholder='Title'
        name='artist-url'
      ></input>
      <label for='genre'>Genre</label>
      <select
        className='edit-artist-select'
        onChange={(e) => setGenreId(e.target.value)}
        onMouseMove={(e) => setGenreId(e.target.value)}

        defaultValue={genreId}
        value={genreId}
        name='genre'
      >
        {genreArr?.map((genre, i) => (

            <option key={i} value={i + 1}>
            {genre}
          </option>
        )

        )}
      </select>
      <label for='location'>Location</label>
      <input
        className='edit-artist-input'
        type='text'
        onChange={(e) => setLocation(e.target.value)}
        value={location}
        // placeholder='Title'
        name='location'
      ></input>
      <label for='description'>Description</label>
      <textarea
        className='edit-artist-textarea'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        // placeholder='Title'
        name='description'
      ></textarea>

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
