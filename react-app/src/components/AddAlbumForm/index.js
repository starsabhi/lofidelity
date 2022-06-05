import './AddAlbumForm.css';

import React, { useState } from 'react';
import * as albumActions from '../../store/album';
import { useDispatch } from 'react-redux';

export default function AddAlbumForm({ artist, closeModal }) {
  const dispatch = useDispatch('');
  const [image, setImage] = useState(null);
  const artistId = artist.id;

  const [imageLoading, setImageLoading] = useState(false);

  const [title, setTitle] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [about, setAbout] = useState('');
  // const [price, setPrice] = useState('');
  const [albumErrors, setAlbumErrors] = useState([]);
  // const [newEditErros, setNewEditErros] = useState([]);

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    setAlbumErrors([]);

    const formData = new FormData();

    formData.append('image', image);
    formData.append('artistId', artistId);
    formData.append('title', title);
    formData.append('releaseYear', releaseYear);
    formData.append('about', about);
    // formData.append('price', price);

    setImageLoading(true);
    // let formdata = {
    //   artistId: artistId,
    //   title: title,
    //   releaseYear: releaseYear,
    //   about: about,
    //   price: price,
    // };

    try {
      const errors = await dispatch(albumActions.addNewAlbumThunk(formData));
      if (!errors) {
        closeModal();
        return;
      } else {
        setImageLoading(false);
        setAlbumErrors(errors);
        return;
      }
    } catch (errorResponse) {
      setImageLoading(false);
      setAlbumErrors(['Something went wrong please try again']);
      console.log('Failed Request: ', errorResponse);
    }
  };
  const AddImage = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImage(file);
  };

  return (
    <>
      <h2 className='add-song-header'>Add Song</h2>
      <form
        className='resource-update-form resource-add-error-form'
        onSubmit={handleAddSubmit}
      >
        {albumErrors.length > 0 && (
          <div className='resource-error-container'>
            {albumErrors.map((error, idx) => (
              <p className='resource-error-message' key={idx}>
                {error}
              </p>
            ))}
          </div>
        )}
        <div className='inputfieldDiv'>
          <label className='titleForanInput'>Title</label>
          <input
            className='allInputforCreateB'
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder='Title'
            name='name'
            required
          ></input>
        </div>
        <div className='inputfieldDiv'>
          <label className='titleForanInput'>ReleaseYear</label>
          <input
            className='allInputforCreateB'
            type='text'
            onChange={(e) => setReleaseYear(e.target.value)}
            value={releaseYear}
            placeholder='ReleaseYear'
            name='name'
            required
          ></input>
        </div>
        <div className='inputfieldDiv'>
          <label className='titleForanInput'>About</label>
          <input
            className='allInputforCreateB'
            type='text'
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            placeholder='Title'
            name='name'
            required
          ></input>
        </div>

        {/* <div className='inputfieldDiv'>
          <label className='titleForanInput'>Price</label>
          <input
            className='allInputforCreateB'
            type='text'
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            placeholder='Title'
            name='name'
          ></input>
        </div> */}

        <div className='resource-delete-text2'>
          <input type='file' accept='image/*' onChange={AddImage} />
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
              Submit
            </button>
          </div>
        </div>
        {imageLoading && <p>Uploading File please wait...</p>}
      </form>
    </>
  );
}