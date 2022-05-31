import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();

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
  };

  return (
    <div className='nav-user-image-container' onClick={openMenu}>
      <div
        className='nav-user-image'
        // style={{ backgroundImage: `url(${userIcon})` }}
      >
        {showMenu && (
          <>
            <div className='nav-user-dropdown-container' ref={menu}>
              <div className='nav-user-dropdown-welcome'>
                Welcome {user.username}!
              </div>
              <div className='nav-user-dropdown-artist'>Artist Page</div>
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

export default ProfileButton;
