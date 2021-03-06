import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';

export default function ProfileButton({ user }) {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const sessionArtist = useSelector((state) => state.session.sessionArtist);

  const menu = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  //dropdown click handler
  const openMenu = () => {
    //do nothing if menu already showed
    if (showMenu) return;
    setShowMenu(true);
  };

  //Check status of menu
  useEffect(() => {
    //if menu already closed do nothing
    if (!showMenu) return;

    const closeMenu = ({ target }) => {
      //     setShowMenu(false);
      //could do something wih "activeElement instead
      if (target !== menu.current && !menu.current?.contains(target)) {
        setShowMenu((prev) => !prev);
      }
    };
    //add event listener to entire document
    document.addEventListener('click', closeMenu);

    //cleanup function
    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu]);

  //logout click handler
  const logout = (e) => {
    e.preventDefault();
    //removes user from jwt cookie
    dispatch(sessionActions.logout());
    alert("You've been successfully logged out.");
  };

  return (
    <div className='nav-user-image-container' onClick={openMenu}>
      <div
        className='nav-user-image'
        style={
          sessionArtist?.profileImageUrl
            ? {
                backgroundImage: `url(${sessionArtist?.profileImageUrl})`,
              }
            : { backgroundImage: '' }
        }
      >
        {showMenu && (
          <>
            <div className='nav-user-dropdown-container' ref={menu}>
              <div className='nav-user-dropdown-welcome'>
                <div className='nav-user-dropdown-welcome-text'>Welcome {user?.username}!</div>
              </div>

              {sessionArtist && (
                <Link
                  className='nav-user-dropdown-artist-link'
                  to={`/${sessionArtist?.artistUrl}`}
                >
                  <div>Artist Profile Page</div>
                </Link>
              )}

              {sessionUser?.isArtist && !sessionArtist && (
                <Link
                  className='nav-user-dropdown-artist-link'
                  to={`/sign-up/artist/details`}
                >
                  <div>Create an Artist Profile </div>
                </Link>
              )}

              <div className='nav-user-logout'>
                <button
                  className='nav-user-logout-btn'
                  type='button'
                  onClick={logout}
                >
                  Log Out
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
