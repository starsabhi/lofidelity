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
  // const [newAddErros, setAddEditErros] = useState([]);
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

  // useEffect(() => {
  //   let changedError = [];
  //   for (let i = 0; i < albumErrors.length; i++) {
  //     console.log(albumErrors[i]);
  //     if (albumErrors[i] === 'title : This field is required.') {
  //       changedError.push('Please provide valid title');
  //     }
  //     if (albumErrors[i] === 'title : Title must be less than 255 characters.') {
  //       changedError.push('Title must be less than 255 characters.');
  //     }
  //     if (albumErrors[i] === 'releaseYear : This field is required.') {
  //       changedError.push('Year must be between 1900 and 2023');
  //     }
  //     if (
  //       albumErrors[i] === 'releaseYear : Number must be between 1900 and 2023.'
  //     ) {
  //       changedError.push('Year must be between 1900 and 2023');
  //     }
  //     if (albumErrors[i] === 'Please choose a Image file') {
  //       changedError.push('Please choose an Image file');
  //     }
  //     if (albumErrors[i] === 'File type not permitted') {
  //       changedError.push(
  //         'File type not permitted (Only .png, .jpg, .jpeg, .gif permitted)'
  //       );
  //     }
  //   }
  //   // console.log(changedError);
  // setAddEditErros(changedError);
  // }, [albumErrors]);

  // console.log('************', albumErrors);

  return (
    <>
      <form
        className='resource-update-form add-album'
        onSubmit={handleAddSubmit}
      >
        <h2 className='add-album-header add-album-header-fix'>Add Album</h2>
        {albumErrors?.length > 0 && (
          <div className='resource-error-container'>
            {albumErrors?.map((error, idx) => (
              <p className='resource-error-message' key={idx}>
                {error?.split(': ')[1]}
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
            placeholder='About'
            name='name'
            // required
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

        <div className='inputfieldDiv'>
          <div className='titleForanInput'>
            Please upload your album cover image:
          </div>
        </div>

        <div className='resource-delete-text2 resource-add-text2 file-upload-div'>
          <input type='file' accept='image/*' onChange={AddImage} />
        </div>

        {imageLoading && (
          <p className='UploadingLoadingptag'>Uploading File please wait...</p>
        )}
        <div className='resource-delete-form-btn-div add-albumDivBtunList'>
          <div className='resource-btn-container'>
            <button
              className='resource-cancel-btn'
              type='button'
              onClick={closeModal}
              disabled={imageLoading}
            >
              Cancel
            </button>
          </div>

          <div className='resource-btn-container'>
            <button
              className='resource-delete-btn'
              type='submit'
              disabled={imageLoading}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
