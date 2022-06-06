import './EditArtistForm.css';

import React, { useState, useEffect } from 'react';

import * as artistActions from '../../store/artist';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function EditArtistForm({ genreList, closeModal }) {
  const dispatch = useDispatch('');
  const history = useHistory();
  // const session = useSelector((state) => state);
  // // console.log(session.album[albumId]);
  // let currentAlbum = session.album[albumId];
  const artist = useSelector((state) => state.session.sessionArtist);
  const [genreId, setGenreId] = useState(`${artist?.genreId}`);
  const [name, setName] = useState(`${artist?.name}`);
  const [location, setLocation] = useState(`${artist?.location}`);
  const [artistUrl, setArtistUrl] = useState(`${artist?.artistUrl}`);
  const [description, setDescription] = useState(`${artist?.description}`);
  const [editErrors, setEditErrors] = useState([]);
  // const [newAddErros, setAddEditErros] = useState([]);

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
      userId: artist?.userId,
    };

    try {
      const errors = await dispatch(
        artistActions.updateOneArtistThunk(artist, formdata)
      );

      if (!errors) {
        closeModal();
        history.push(`/${artistUrl}`);
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

  // useEffect(() => {
  //   let changedError = [];
  //   for (let i = 0; i < editErrors.length; i++) {
  //     console.log(editErrors[i]);
  //     if (editErrors[i] === 'name : This field is required.') {
  //       changedError.push('Please provide valid Name');
  //     }
  //     if (editErrors[i] === 'location : This field is required.') {
  //       changedError.push('Please provide valid Location');
  //     }
  //     if (editErrors[i] === 'artistUrl : This field is required.') {
  //       changedError.push('Please provide valid Location');
  //     }
  //     if (editErrors[i] === 'description : This field is required.') {
  //       changedError.push('Please provide valid description');
  //     }
  //   }
  //   // console.log(changedError);
  //   setAddEditErros(changedError);
  // }, [editErrors]);
  // console.log('*************', newAddErros);

  //   name : This field is required.
  // location : This field is required.
  // artistUrl : This field is required.
  // description : This field is required.

  return (
    <form
      className='resource-update-form edit-artist'
      onSubmit={handleEditSubmit}
    >
      <h2 className='add-artist-header edit-artist-htag'>
        Edit Artist Details
      </h2>
      {editErrors.length > 0 && (
        <div className='resource-error-containerr edit-artist-error-div'>
          {editErrors.map((error, idx) => (
            <p className='resource-error-message ptagErrorMessage' key={idx}>
              {error?.split(': ')[1]}
            </p>
          ))}
        </div>
      )}

      <div className='inputfieldDiv'>
        <label className='titleForanInput' htmlFor='name'>
          Artist Name
        </label>
        <input
          className='allInputforCreateB'
          type='text'
          onChange={(e) => setName(e.target.value)}
          value={name}
          // placeholder='Title'
          name='name'
        ></input>
      </div>
      <div className='inputfieldDiv'>
        <label className='titleForanInput' htmlFor='artist-url'>
          Artist URL
        </label>
        <input
          className='allInputforCreateB'
          type='text'
          onChange={(e) => setArtistUrl(e.target.value)}
          value={artistUrl}
          // placeholder='Title'
          name='artist-url'
        ></input>
      </div>
      <div className='inputfieldDiv'>
        <label className='titleForanInput' htmlFor='genre'>
          Genre
        </label>
        <select
          className='allInputforCreateB'
          onChange={(e) => setGenreId(e.target.value)}
          onMouseMove={(e) => setGenreId(e.target.value)}
          defaultValue={genreId}
          value={genreId}
          name='genre'
        >
          {genreArr?.map(([num, value], i) => (
            <option key={i} value={i + 1}>
              {`${value}`}
            </option>
          ))}
        </select>
      </div>
      <div className='inputfieldDiv'>
        <label className='titleForanInput' htmlFor='location'>
          Location
        </label>
        <input
          className='allInputforCreateB'
          type='text'
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          // placeholder='Title'
          name='location'
        ></input>
      </div>
      <div className='inputfieldDiv'>
        <label className='titleForanInput' htmlFor='description'>
          Description
        </label>
        <textarea
          className='textareaForArtistEdit'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          // placeholder='Title'
          name='description'
          rows={5}
        ></textarea>
      </div>

      <div className='resource-delete-form-btn-div add-albumDivBtunList'>
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
