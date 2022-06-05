import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link, useLocation } from 'react-router-dom';
// import { signUp } from '../../store/session';
import * as sessionActions from '../../store/session';

export default function SignUpForm() {
  const dispatch = useDispatch();

  // const history = useHistory(); // so that we can redirect after the image upload is successful
  let location = useLocation();

  const userType = location.pathname.split('/sign-up/')[1];

  const sessionUser = useSelector((state) => state.session.user);
  const artist = useSelector((state) => state.session.sessionArtist);

  const [isArtist, setIsArtist] = useState(userType === 'artist');

  //slices of react state for controlled inputs
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);

  //as url changes reset parts of the form
  useEffect(() => {
    setIsArtist(userType === 'artist');
    // allow username and email to move between fan and artist signup pages
    setTerms(false);
    setPassword('');
  }, [userType]);

  //form submission handler
  const submitSignUp = async (e) => {
    e.preventDefault();
    setErrors([]); //reset error state

    // if (password === repeatPassword) {
    if (terms === true) {
      // send request to backend API signup route (api/session)
      if (isArtist) {
        const data = await dispatch(
          // do we want to send artist name to backend, or remove from form?
          sessionActions.signUpArtist(username, email, password)
        );
        if (data) {
          setErrors(data);
        } else {
          // history.push('/sign-up/artist/details');
        }
      } else {
        const data = await dispatch(
          sessionActions.signUpFan(username, email, password)
        );
        if (data) {
          setErrors(data);
        }
      }
    } else {
      setErrors(['terms: Please agree to the terms.']);
    }
    // }
  };

  // Redirect logged in fan to home page
  if (sessionUser && !sessionUser.isArtist) {
    return <Redirect to='/' />;
  }

  // Redirect logged in already made artist to home page
  if (sessionUser && artist) {
    return <Redirect to='/' />;
  }

  // If logged in artist with no artist in db yet, send to add artist page
  if (sessionUser && !artist) {
    return <Redirect to='/sign-up/artist/details' />;
  }

  return (
    <div className='signup-card-container'>
      <div className='signup-card'>
        {isArtist ? (
          <h2 className='signup-header'>Sign Up for an Artist Account</h2>
        ) : (
          // prettier-ignore
          <h2 className='signup-header'>Sign up for a Lofidelity fan account</h2>
        )}
        {errors.length > 0 && (
          <div className='signup-error-container'>
            {/* <p className='signup-error-message'>Invalid email or password.</p> */}
            {errors.map((error, ind) => (
              <div key={ind}>{error.split(': ')[1]}</div>
            ))}
          </div>
        )}
        <form
          className={`signup-form-control`}
          autoComplete='off'
          onSubmit={submitSignUp}
        >
          <div className={`signup-form-group`}>
            <label className={`signup-label`} htmlFor='username'>
              <div>Username </div>
            </label>
            <input
              id='username'
              className={`signup-input`}
              type={'username'}
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className={`signup-form-group`}>
            <label className={`signup-label`} htmlFor='email'>
              <div>Email </div>
            </label>
            <input
              id='email'
              className={`signup-input`}
              type={'email'}
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={`signup-form-group`}>
            <label className={`signup-label`} htmlFor='password'>
              <div>Password </div>
            </label>
            <input
              id='password'
              className={`signup-input`}
              type={'password'}
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className='signup-checkbox-container'>
            <label className='signup-checkbox-label' htmlFor='terms'>
              <input
                id='terms'
                className=''
                type='checkbox'
                name='terms'
                value='terms'
                checked={terms}
                onChange={(e) => setTerms((prevVal) => !prevVal)}
              />
              <span>
                I have read and agree to the&nbsp;
                {/* <Link className='signup-link-terms' to='#'>
                  Terms of Use
                </Link> */}
                <span className='signup-link-terms' to='#'>
                  Terms of Use
                </span>
                .
              </span>
            </label>
          </div>

          <div className='signup-sign-up-btn-container'>
            <button className='signup-sign-up-btn' type='submit'>
              Sign Up
            </button>
          </div>
        </form>

        <div className='signup-card-bottom'>
          <div className='signup-have-account-container'>
            <span>Already have an Account?</span>
            <Link className='signup-link-login' to='/login'>
              Log in.
            </Link>
          </div>

          {isArtist && (
            <div className='signup-not-artist-container'>
              <span>Not an artist? Sign up for</span>
              <Link className='signup-link-signup-fan' to='/sign-up/fan'>
                a fan account.
              </Link>
            </div>
          )}

          {!isArtist && (
            <div className='signup-not-fan-container'>
              <span>Not a fan? Sign up for</span>
              <Link className='signup-link-signup-artist' to='/sign-up/artist'>
                an artist account.
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
