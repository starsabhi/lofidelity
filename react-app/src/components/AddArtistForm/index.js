import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as artistActions from '../../store/artist';

import * as sessionActions from '../../store/session';

export default function AddArtistForm() {
  const dispatch = useDispatch();
  // const history = useHistory(); // so that we can redirect after the image upload is successful

  const sessionUser = useSelector((state) => state.session.user);
  const artists = useSelector((state) => state.artist.artistsByArtistId);
  const artist = useSelector((state) => state.session.sessionArtist);

  const genreList = {
    1: 'acoustic',
    2: 'alternative',
    3: 'ambient',
    4: 'blues',
    5: 'classical',
    6: 'country',
    7: 'electronic',
    8: 'experimental',
    9: 'folk',
    10: 'funk',
    11: 'hiphop_rap',
    12: 'jazz',
    13: 'metal',
    14: 'pop',
    15: 'punk',
    16: 'soul',
    17: 'reggae',
    18: 'rock',
  };
  const genreArr = Object.entries(genreList);

  //slices of react state for controlled inputs
  const [errors, setErrors] = useState([]);

  const [artistName, setArtistName] = useState(''); //artist only
  const [genreId, setGenreId] = useState(0);
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [artistUrl, setArtistUrl] = useState(sessionUser?.username);

  // If user is an artist, fetch artist details into session state
  useEffect(() => {
    if (sessionUser?.isArtist) {
      (async () => {
        await dispatch(
          sessionActions.getSessionArtistThunk(sessionUser.id)
        ).catch((res) => console.log(res));
      })();
    }
  }, [dispatch, sessionUser, artists]);

  const submitArtistDetails = async (e) => {
    e.preventDefault();
    setErrors([]); //reset error state

    let formData = {
      genreId: genreId,
      name: artistName,
      location: location,
      artistUrl: artistUrl,
      description: description,
      userId: sessionUser.id,
    };

    try {
      // send request to backend API add Artist route (api/session)
      const errors = await dispatch(artistActions.addNewArtistThunk(formData));

      if (!errors) {
        // history.push(`/${artistUrl}`);
        // history.push(`/`);
        return;
      } else {
        setErrors(errors);
        return;
      }
    } catch (errorResponse) {
      // const data = await errorResponse.json();
      console.log('Failed Request: ', errorResponse);
    }
  };

  // Redirect logged in already made artist to home page
  if (sessionUser && artist) {
    // console.log('ARTIST FIRED');
    // return <Redirect to='/' />;
    return <Redirect to={`/${artistUrl}`} />;
  }

  // Redirect logged in fan to home page
  if (sessionUser && !sessionUser?.isArtist) {
    // console.log('FAN FIRED');
    return <Redirect to='/' />;
  }

  return (
    <div className='signup-card-container'>
      <div className='signup-card'>
        <h2 className='signup-header'>
          {`Welcome, ${sessionUser?.username}!`}
          <div>To get started, create an Artist Profile:</div>
        </h2>

        {errors.length > 0 && (
          <div className='signup-error-container'>
            {/* <p className='signup-error-message'>Invalid email or password.</p> */}
            {errors.map((error, ind) => (
              <div key={ind}>{error?.split(': ')[1]}</div>
            ))}
          </div>
        )}
        <form
          className={`signup-form-control`}
          autoComplete='off'
          onSubmit={submitArtistDetails}
        >
          <div className={`signup-form-group`}>
            <label className={`signup-label`} htmlFor='artistName'>
              <div>Artist/Band Name </div>
            </label>
            <input
              id='artistName'
              className={`signup-input`}
              type='text'
              name='artistName'
              value={artistName}
              onChange={(e) => setArtistName(e.target.value)}
              required
            />
          </div>

          <div className={`signup-form-group`}>
            <label className={`signup-label`} htmlFor='genre'>
              <div>Genre </div>
            </label>
            <select
              id='genre'
              className={`signup-input`}
              // type=''
              name='genre'
              // defaultValue={0}
              value={genreId}
              onChange={(e) => setGenreId(e.target.value)}
              onMouseMove={(e) => setGenreId(e.target.value)}
              required
            >
              <option disabled value={0}>
                Please select a genre{' '}
              </option>
              {genreArr?.map(([num, value], i) => (
                <option key={i} value={i + 1}>
                  {`${value}`}
                </option>
              ))}
            </select>
          </div>

          <div className={`signup-form-group`}>
            <label className={`signup-label`} htmlFor='location'>
              <div>Location </div>
            </label>
            <input
              id='location'
              className={`signup-input`}
              type={'location'}
              name='location'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div className={`signup-form-group`}>
            <label className={`signup-label`} htmlFor='description'>
              <div>Description </div>
            </label>
            <input
              id='description'
              className={`signup-input`}
              type={'description'}
              name='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className={`signup-form-group`}>
            <label className={`signup-label`} htmlFor='artistUrl'>
              <div>Artist Profile Url: </div>
            </label>
            {/* <div>.herokuapp.com/</div> */}
            <input
              id='artistUrl'
              className={`signup-input`}
              type={'artistUrl'}
              name='artistUrl'
              value={artistUrl}
              placeholder={`app.com/${sessionUser?.username}`}
              onChange={(e) => setArtistUrl(e.target.value)}
              required
            />
          </div>

          <div className={`signup-form-group`}>
            <label className={`signup-label`} htmlFor='artistUrl-show'>
              {/* <div>Profile Address: </div> */}
            </label>
            <div id='artistUrl-show'>
              <div>{`app.com/${artistUrl}`}</div>
            </div>
          </div>

          <div className='signup-sign-up-btn-container'>
            <button className='signup-sign-up-btn' type='submit'>
              Done
            </button>
          </div>
        </form>

        <div className='signup-card-bottom'>
          <div></div>
        </div>
      </div>
    </div>
  );
}
