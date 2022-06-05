import './UploadPhoto.css';

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as artistActions from '../../store/artist';

export default function UploadPhoto({ imageType, closeModal, artist }) {
  const history = useHistory(); // so that we can redirect after the image upload is successful
  const dispatch = useDispatch();
  // const artist = useSelector((state)=> state.session.sessionArtist)
  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [uploadErrors, setUploadErrors] = useState([]);

  // const sessionUser = useSelector((state) => state.session.user);
  const id = artist?.id;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploadErrors([]); //reset error state

    const formData = new FormData();
    formData.append('image', image);
    console.log(id);

    // aws uploads can be a bit slow—displaying
    // some sort of loading message is a good idea
    setImageLoading(true);
    console.log('right before thunk');

    //   const errors = await dispatch(
    //     albumActions.updateOneAlbumThunk(albumId, formdata)
    //   );
    //   console.log('MODAL', errors);
    //   if (!errors) {
    //     closeModal();
    //     return;
    //   } else {
    //     setEditErrors(errors);
    //     return;
    //   }
    // };

    // const errors = await dispatch(
    //   artistActions.updateArtistImageThunk(
    //     artist.genreId,
    //     artist.id,
    //     formData,
    //     imageType
    //   )
    // );
    //     console.log(errors)
    // if (!errors) {
    //   setImageLoading(false);
    //   closeModal();

    //   history.push('/');
    // return;
    // } else {
    //   setUploadErrors(errors)
    //   setImageLoading(false);
    //   console.log('error');
    //   return
    // }

    try {
      const res = await dispatch(
        artistActions.updateArtistImageThunk(
          artist.genreId,
          artist.id,
          formData,
          imageType
        )
      );
      console.log(res);
      if (res.url) {
        setImageLoading(false);
        closeModal();

        history.push('/');
        return;
      }
    } catch (errorResponse) {
      console.log('ERROR', errorResponse);
      // setImageLoading(false);
      // console.log('error');
      // const data = await errorResponse.json();
      // if (data && data.errors) setUploadErrors(data.errors);
      // console.log(uploadErrors);
    }
  };

  const updateImage = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImage(file);
  };

  return (
    <div className={`resource-delete-form-container`}>
      {uploadErrors.length > 0 && (
        <div className='resource-error-container'>
          {uploadErrors.map((error, idx) => (
            <p className='resource-error-message' key={idx}>
              {error}
            </p>
          ))}
        </div>
      )}
      <form className='resource-delete-form' onSubmit={handleSubmit}>
        <div className='resource-delete-text1'>
          <span>{`Upload ${imageType} image`}</span>
        </div>
        <div className='resource-delete-text2'>
          <span>{`Upload your new ${imageType} image`}</span>
        </div>
        <div className='resource-delete-text2'>
          <input type='file' accept='image/*' onChange={updateImage} />
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

        {imageLoading && <p>Loading...</p>}
      </form>
    </div>
  );
}
