import './UploadPhoto.css';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as artistActions from '../../store/artist';

export default function UploadPhoto({ imageType, closeModal, artist }) {
  // const history = useHistory(); // so that we can redirect after the image upload is successful
  const dispatch = useDispatch();

  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [uploadErrors, setUploadErrors] = useState([]);

  const id = artist?.id;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploadErrors([]); //reset error state

    const formData = new FormData();
    formData.append('image', image);
    console.log(id);

    setImageLoading(true);

    try {
      const errors = await dispatch(
        artistActions.updateArtistImageThunk(
          artist.genreId,
          artist.id,
          formData,
          imageType
        )
      );
      if (!errors) {
        closeModal();

        // history.push('/');
        return;
      }else {
        setImageLoading(false)
        setUploadErrors(errors);
      }
    } catch (errorResponse) {
      setImageLoading(false);
      // closeModal();
      setUploadErrors(['Something went wrong, please try again.']);

      console.log('error');
    }
  };

  const updateImage = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImage(file);
  };

  return (
    <div className={`resource-delete-form-container`}>
      <form className='resource-delete-form' onSubmit={handleSubmit}>
        <div className='resource-delete-text1'>
          <span>{`Upload ${imageType} image`}</span>
        </div>
        {/* <div className='resource-delete-text2'>
          <span>{`Upload your new ${imageType} image`}</span>
        </div> */}
      {uploadErrors.length > 0 && (
        <div className='resource-error-container'>
          {uploadErrors.map((error, idx) => (
            <p className='resource-error-message' key={idx}>
              {error}
            </p>
          ))}
        </div>
      )}
        <div className='resource-delete-text2'>
          <input type='file' accept='image/*' onChange={updateImage} />
        </div>

        <div className='resource-delete-form-btn-div'>
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
            <button className='resource-delete-btn' type='submit' disabled={imageLoading}>
              Submit
            </button>
          </div>
        </div>

        {imageLoading && <p>Loading...</p>}
      </form>
    </div>
  );
}
