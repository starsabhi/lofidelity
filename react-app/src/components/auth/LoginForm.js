import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link, NavLink } from 'react-router-dom';
// import { login } from '../../store/session';
import * as sessionActions from '../../store/session';

const LoginForm = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  //slices of react state for controlled inputs
  // const [email, setEmail] = useState('');
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const submitLogin = async (e) => {
    e.preventDefault();
    setErrors([]); //reset error state

    // send request to backend API login route (api/session)
    const data = await dispatch(sessionActions.login({ credential, password }));
    if (data) {
      setErrors(data);
    }
  };

  const demoLogin = async (e) => {
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
      //should not return errors unless demo user no longer in database
      //also flask does not send a response object, so .json() won't work
      // const data = await errorResponse.json();
      // if (data && data.errors) setErrors(data.errors);
    }
  };

  //if redux state updated with user session, redirect to homepage
  //consider using history if want to be able to use back button
  if (sessionUser) return <Redirect to='/' />;

  return (
    <div
      className='login-background'
      // style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className='login-card-container'>
        <div className='login-card'>
          <h6 className='login-header'>Log In</h6>

          {errors.length > 0 && (
            <div className='login-error-container'>
              {/* <p className='login-error-message'>Invalid email or password.</p> */}
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
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
                Username / email
              </label>
              <input
                id='credential'
                className={`login-input`}
                type='text'
                name='credential'
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                // onFocus={() => setCredentialLabel((prev) => !prev)}
                // onBlur={() => setCredentialLabel((prev) => !prev)}
                required
              />
            </div>

            <div className={`login-form-group`}>
              <label className={`login-label`} htmlFor='password'>
                Password
              </label>
              <div className='login-input-icon-container'>
                <input
                  id='password'
                  className={`login-input`}
                  type={'password'}
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // onFocus={() => setPasswordLabel((prev) => !prev)}
                  // onBlur={() => setPasswordLabel((prev) => !prev)}
                  required
                />
              </div>
            </div>

            <div className='login-sign-in-btn-container'>
              <button className='login-sign-in-btn' type='submit'>
                Sign In
              </button>
            </div>

            <div className='demo-sign-in-btn-container'>
              <button
                className='demo-sign-in-btn'
                type='button'
                onClick={demoLogin}
              >
                Demo User Sign In
              </button>
            </div>
          </form>

          <div className='login-card-bottom'>
            <div className='login-forgot-password'>
              {/* to='/forgot-password' */}
              <Link className='login-link-forgot' to='#'>
                Forgot password?
              </Link>
            </div>

            <div className='login-not-member'>
              <span>Don't have an account? Sign up as</span>
              <Link className='login-link-signup' to='/sign-up'>
                a fan
              </Link>
              <span> or </span>
              <Link className='login-link-signup' to='/sign-up'>
                an artist
              </Link>
              <span>.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
