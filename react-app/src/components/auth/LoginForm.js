import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
// import { login } from '../../store/session';
import * as sessionActions from '../../store/session';

export default function LoginForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const artist = useSelector((state) => state.session.sessionArtist);

  //slices of react state for controlled inputs
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [artistLoaded, setArtistLoaded] = useState(false);

  // If user is an artist, fetch artist details into session state
  useEffect(() => {
    if (sessionUser?.isArtist) {
      (async () => {
        await dispatch(
          sessionActions.getSessionArtistThunk(sessionUser.id)
        ).catch((res) => console.log(res));
      })();
    }
  }, [dispatch, sessionUser]);

  // once artist is loaded, update state
  useEffect(() => {
    if (artist) setArtistLoaded(true);
  }, [dispatch, artist]);

  //login submit handlers
  const submitLogin = async (e) => {
    e.preventDefault();
    setErrors([]); //reset error state

    // send request to backend API login route (api/session)
    const data = await dispatch(sessionActions.login({ credential, password }));
    if (data) {
      setErrors(data);
    }
  };

  const demoArtistLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await dispatch(
        sessionActions.login({
          // credential: 'demoartist@user.io',
          credential: 'DemoArtist',
          password: 'password',
        })
      );

      if (data) setErrors(data);
    } catch (errorResponse) {
      console.log(errorResponse);
      //should not return errors unless demo user no longer in database
      //also flask does not send a response object, so .json() won't work
      // const data = await errorResponse.json();
      // if (data && data.errors) setErrors(data.errors);
    }
  };

  const demoFanLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await dispatch(
        sessionActions.login({
          // credential: 'demofan@user.io',
          credential: 'DemoFan',
          password: 'password',
        })
      );

      if (data) setErrors(data);
    } catch (errorResponse) {
      console.log(errorResponse);
    }
  };

  //if redux state updated with user session, redirect to homepage
  //ensure artist is loaded into session state before redirecting
  if (sessionUser)
    if (sessionUser.isArtist) {
      if (artistLoaded) return <Redirect to='/' />;
    } else return <Redirect to='/' />;

  return (
    <div className='login-card-container'>
      <div className='login-card'>
        <h2 className='login-header'>Log In</h2>

        {errors.length > 0 && (
          <div className='login-error-container'>
            {/* <p className='login-error-message'>Invalid email or password.</p> */}
            {errors.map((error, ind) => (
              <div key={ind}>{error.split(': ')[1]}</div>
            ))}
          </div>
        )}

        <form
          className={`login-form-control`}
          autoComplete='off'
          onSubmit={submitLogin}
        >
          <div className={`login-form-group`}>
            <label className={`login-label`} htmlFor='credential'>
              <div>Username / Email </div>
            </label>
            <input
              id='credential'
              className={`login-input`}
              type='text'
              name='credential'
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </div>

          <div className={`login-form-group`}>
            <label className={`login-label`} htmlFor='password'>
              <div>Password </div>
            </label>
            <input
              id='password'
              className={`login-input`}
              type={'password'}
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className='login-sign-in-btn-container'>
            <button className='login-sign-in-btn' type='submit'>
              Log In
            </button>
          </div>

          <div className='demo-sign-in-btn-container'>
            <button
              className='demo-sign-in-btn'
              type='button'
              onClick={demoArtistLogin}
            >
              Demo Artist Log In
            </button>
          </div>

          <div className='demo-sign-in-btn-container'>
            <button
              className='demo-sign-in-btn'
              type='button'
              onClick={demoFanLogin}
            >
              Demo Fan Log In
            </button>
          </div>
        </form>

        <div className='login-card-bottom'>
          <div className='login-forgot-password'>
            {/* to='/forgot-password' */}
            <Link className='login-forgot-link' to='#'>
              Forgot password?
            </Link>
          </div>

          <div className='login-no-account-container'>
            <span>Don't have an account? Sign up as</span>
            <Link className='login-link-signup' to='/sign-up/fan'>
              a fan
            </Link>
            <span> or </span>
            <Link className='login-link-signup' to='/sign-up/artist'>
              an artist.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
